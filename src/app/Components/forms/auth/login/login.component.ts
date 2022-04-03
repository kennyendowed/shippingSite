import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalsProvider } from 'src/app/providers/core/globals';
import { UserProvider } from 'src/app/providers/features/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  fieldTextType: boolean;
  loading = false;
  loginForm: FormGroup = new FormGroup({
    password: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
        ),
      ])
    ),
    email: new FormControl('', Validators.compose([Validators.required])),
  });
  validation_messages = {
    email: [{ type: 'required', message: 'Email is required.' }],
    password: [
      { type: 'required', message: 'Password is required.' },
      {
        type: 'minlength',
        message: 'Password must be at least 6 characters long.',
      },
      {
        type: 'pattern',
        message:
          'Password must contain at least 1 lower-case and capital letter, a number and symbol..',
      },
    ],
  };
  constructor(private uData: UserProvider, private globals: GlobalsProvider) {}

  ngOnInit(): void {}
  async login(form: any) {
    this.globals.spinner.show();
    this.uData
      .login(form)
      .then(async (login) => {
        // console.log(login);
        if (login === 'logged in') {
         

          setTimeout(() => {
            /** spinner ends after 2 seconds */
            this.globals.spinner.hide();
          }, 2000);

        this.globals.storage.getItem('userdata').then(async (res: any) =>{
         if(res.email_verify =='0') {
          this.globals.toastAlert("verify account", 'info');
          this.globals.navigate("/verifyAccount");
         }       
         else{
           console.log(res)
         if(res.role.includes('ROLE_CUSTOMER')){
          this.globals.toastAlert(login, 'success');
          this.globals.navigate('/overview');
          }
          else if(res.role.includes('ROLE_STAFF')){
            this.globals.toastAlert(login, 'success');
            this.globals.navigate('/staff');
          }
         
         }
      })
      .catch((ex:any)=>{
        return false;
      });
        
     //if(ex.error.code == '403'){
        //this.globals.navigate("/verifyAccount");
          //  }

        //  this.globals.navigate('/overview');
        }
      })
      .catch((ex: any) => {
        console.log(ex);
        this.globals.spinner.hide();
        if (typeof ex.error.developerMessage == 'string')
          this.globals.toastAlert(ex.error.developerMessage, 'error');
        //     if(ex.error.code == '403'){
        // this.globals.navigate("/verifyAccount");
        //     }
        //     else{
        if (typeof ex.error.developerMessage != 'string') {
          for (let err in ex.error.developerMessage) {
            this.globals.toastAlert(ex.error[err][0], 'error');
          }
        }
        //  }
      });
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
