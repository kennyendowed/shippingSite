import { Injectable } from '@angular/core';
import { GlobalsProvider } from '../core/globals';
import jwt_decode from 'jwt-decode';
import { accountsInfoModel, authModel } from 'src/app/models/model';
import { RequestProvider } from '../core/request';

@Injectable()
export class UserProvider {
  user: any;
  path: string = "users/";
  loader: any;
  tries: number = 0;

  constructor(
    private globals: GlobalsProvider,
    private api:   RequestProvider
  ) {
  }

  async isLoggedOn() {
    return await new Promise((resolve: any, reject: any) => {
     this.globals.storage.getItem('userdata')
        .then(async (res: any) =>{
            if(res){
        this.globals.userdata =res;
        const jwt = await this.globals.storage.getItem('jwt')
        this.globals.api.setJwt(jwt)
        resolve(true);
            }else{
              reject(false);

            }
        })
        .catch((ex:any)=>{
          reject(false);
        });

    });
  }

  async getUserInfo(): Promise<any> {
    return await new Promise((resolve, reject) => {
        this.globals.api.get(`${this.path}${this.globals.userdata.auth_id}`)
        .then((res: any)=>{
             if (res.message!= null) {
              this.globals.storage.saveItem('userdata', res.message as accountsInfoModel)
               resolve(res.message);
             }
             else{
                reject(res);
             }
        })
        .catch((ex: any)=>{
          console.log(ex)
          reject({error: ex.error || ex.message || JSON.stringify(ex) })
        })
    })
  }



  async updateUserInfo(uid: string, formdata: any): Promise<any> {
    return await new Promise(async (resolve, reject) => {
      try {

        const update: any = await this.globals.api.update(`users/${uid}`, formdata);
        if(update.status =="ok") {
          this.globals.storage.saveItem('userdata', formdata as accountsInfoModel)
          resolve(update.message);
        }
        else{
          throw update;
        }

      }catch(ex) {
        reject({error: ex.message || ex.error || JSON.stringify(ex) })
      }
    });
  }

  lockAfterTries() {
    this.tries = this.tries + 1;
    this.globals.storage.saveItem("locklogin", this.tries)
    this.globals.toastAlert("You have " + (100 - this.tries) + " login attempts left","warning");
    // Reset after 3minutes
    setTimeout(() => {
      this.tries = 0;
      this.globals.storage.removeItem("locklogin")
     }, 180000);
  }

  public async login(form: authModel){
    return await new Promise(async (resolve, reject) => {
      try {
        if (this.tries >= 100)
        {
          this.globals.toastAlert("Login attempt exceeded try again in 3minutes","info");
          reject("Login attempt exceeded");
        }
        else
        {
          /// send post request to login endpoint
          const login: any = await this.globals.api.post(`auth/signin`, form);
          let decoded:any = jwt_decode(login.accessToken);
          this.globals.storage.saveItem('jwt', login.accessToken);
          const jwt = await this.globals.storage.getItem('jwt');
           this.globals.api.setJwt(login.jwt);
            this.user = {
            "email": decoded.email,
            "auth_id": decoded.userId,  
            "email_verify":decoded.email_verify, 
            "role":login.roles        
          }
          this.globals.storage.saveItem('userdata', this.user );
          // console.log(this.user)
               /// deactivate loading and send response
             resolve("logged in")

        }

      } catch(ex) {
     // console.log(ex.error || ex.message || ex)
         this.lockAfterTries()
        reject({error: ex.error || ex.message || ex})
      }
    })
  }

  public async verifyOTP(form: authModel){
    return await new Promise(async (resolve, reject) => {
      try {
           /// send post request to verify endpoint
          const verify: any = await this.globals.api.post(`auth/verify`, form);
            resolve("verify in")    

      } catch(ex) {
            reject({error: ex.error || ex.message || ex})
      }
    })
  }


  public async resetpasswordLink(form: authModel){
    return await new Promise(async (resolve, reject) => {
      try {
           /// send post request to verify endpoint
          const verify: any = await this.globals.api.post(`auth/resetPassword`, form);
          if(verify.status =="TRUE") {
           
            resolve(verify);
          }
          else{
            throw verify;
          }  

      } catch(ex) {
            reject({error: ex.error || ex.message || ex})
      }
    })
  }

  async register(form: any): Promise<any> {
    return await new Promise(async (resolve, reject) => {
      try {
    // console.log(form)
        // / send post request to register endpoint
        const reg: any = await this.globals.api.repost("auth/signup", {
          first_name: form.firstname,
          last_name: form.lastname,
          dob:form.dob,
          email: form.email,
          phone: form.phone['e164Number'],
          country: form.phone['countryCode'],
          password: form.password,
          gender:form.gender,
          password_confirmation:form.confirm_password

        });
       // console.log(reg)
       if(reg.status =="TRUE") {
           
        resolve(reg);
      }
      else{
        throw reg;
      }  
       // if(reg.error) throw new Error(reg.error || reg);

        /// deactivate loading and send response
       // resolve("registered")
      }catch(ex) {
        reject({error: ex.message || ex.error || ex})
      }
    });
  };

  async resetPassword(form: any): Promise<any> {
    return await new Promise(async (resolve, reject) => {
      try {
    // console.log(form)
        // / send post request to register endpoint
        const reg: any = await this.globals.api.repost("auth/passwordReset", {
          password: form.password,
          token:form.token,
          password_confirmation:form.confirm_password

        });
        if(reg.status =="TRUE") {
           
          resolve(reg);
        }
        else{
          throw reg;
        }  

       // if(reg.error) throw new Error(reg.error || reg);

        /// deactivate loading and send response
      //  resolve("reset")
      }catch(ex) {
        reject({error: ex.message || ex.error || ex})
      }
    });
  };

  async forgot(form: any): Promise<any> {
    return await new Promise(async (resolve, reject) => {
      try {
   // / send post request to reset endpoint
   const fogot: any = await this.globals.api.update("reset", {
    email: form.email,
    new_password: form.new_password,
    password: form.password
  });
  if(fogot.error) throw new Error(fogot.error || fogot);

     /// deactivate loading and send response
        resolve("link sent")
      }catch(ex) {
        reject({error: ex.message || ex.error || ex})
      }
    });
  };

  async removeUserInfo(){
    return await new Promise(async (resolve, reject) => {
      try {
   // / send post request to reset endpoint
   const remove: any = await this.globals.api.delete(`remove/${this.user.auth_id}`);
  if(remove.error) throw new Error(remove.error || remove);
     /// deactivate loading and send response
        resolve("Account Deleted")
      }catch(ex) {
        reject({error: ex.message || ex.error || ex})
      }
    });
  };





}
