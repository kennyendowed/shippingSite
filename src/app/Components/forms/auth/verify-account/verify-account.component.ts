import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalsProvider } from 'src/app/providers/core/globals';
import { UserProvider } from 'src/app/providers/features/users';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent implements OnInit {
  vfForm: FormGroup = new FormGroup({
    code: new FormControl('', Validators.compose([
      Validators.required
    ])),

  });
  validation_messages = {

    code: [
      { type: "required", message: "Verification code is required." }
    ]

  };
  constructor(private uData: UserProvider,
  private globals: GlobalsProvider) { }

  ngOnInit(): void {
  }
  async verify(form : any) {
   this.globals.spinner.show();
   this.uData.verifyOTP(form)
   .then(async (login) => {

    if(login === 'verify in') {

        this.globals.toastAlert(login,'success')
        setTimeout(() => {
          /** spinner ends after 2 seconds */
          this.globals.spinner.hide();
        }, 2000);

      this.globals.navigate("/overview");
      }
    })
    .catch((ex: any) => {
          setTimeout(() => {
        /** spinner ends after 2 seconds */
        this.globals.spinner.hide();
      }, 2000);
     if(typeof ex.error.data == 'string') this.globals.toastAlert(ex.error.data[0].message,'error');
      if(ex.error.code == '404'){
        this.globals.toastAlert(ex.error.data[0].message,'error')
  this.globals.navigate("/verifyAccount");
      }
      else{
       if(typeof ex.error.data != 'string') {

       for(let err in ex.error.data) {
         console.log(ex.error.data)
         this.globals.toastAlert(ex.error.data[0].message,'error');
       }
       }
      }

    })


  }
}
