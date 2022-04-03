import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalsProvider } from 'src/app/providers/core/globals';
import { UserProvider } from 'src/app/providers/features/users';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  forgotPasswordForm: FormGroup = new FormGroup({
     email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(
      '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
    )])),
  });

  validation_messages = {
    email: [{ type: 'required', message: 'Email is required.' }, {
      type: 'pattern',
      message:
        'Email not valid',
    }],
  };
  constructor(private uData: UserProvider, private globals: GlobalsProvider) {}

  ngOnInit(): void {}

  async forgetPassword(form:any) {
    this.globals.spinner.show();
    this.uData
    .resetpasswordLink(form)
    .then(async (login : any) => {
      if (login) {
        const message=login.data[0].data;
        this.globals.toastAlert(message, 'success'); 
        setTimeout(() => {
          /** spinner ends after 3 seconds */
          this.globals.spinner.hide();
        }, 5000);
      // 
      }
    }).then(() => {
      this.globals.navigate('/reset');
    })
    .catch((ex: any) => {
         setTimeout(() => {
        /** spinner ends after 2 seconds */
        this.globals.spinner.hide();
      }, 2000);
     if(typeof ex.error.data == 'string') this.globals.toastAlert(ex.error.data[0].message,'error');
      if(ex.error.code == '404'){
        this.globals.toastAlert(ex.error.data[0].message,'error')
      }
      else{
       if(typeof ex.error.data != 'string') {

       for(let err in ex.error.data) {
         console.log(ex.error.data)
         this.globals.toastAlert(ex.error.data[0].message,'error');
       }
       }
      }
    });
}
}
