import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalsProvider } from 'src/app/providers/core/globals';
import { UserProvider } from 'src/app/providers/features/users';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  fieldTextType: boolean;
  fieldTextTypepin:boolean;
  repeatFieldTextType: boolean;
  resetForm: FormGroup = new FormGroup({
      password: new FormControl(
      "",
      Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]),

    ),
    confirm_password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ])),
    token: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(4)
    ])),
  

  },);
  validation_messages = {
    token: [
      { type: "required", message: "Pin is required." },
      {
        type: "maxlength",
        message: "Pin must be at least 4 characters long."
      }
    ],
    password: [
      { type: "required", message: "Password is required." },
      {
        type: "minlength",
        message: "Password must be at least 6 characters long."
      },
      { type: "pattern", message: "Password must contain at least 1 lower-case and capital letter, a number and symbol.." },
    ],

  };

  constructor( private uData: UserProvider,private globals: GlobalsProvider) { }

  async resetPassword(form : any) {
    this.globals.spinner.show();
    this.uData.resetPassword(form)
    .then(async (reset:any) => { 
     if(reset) {
      const message=reset.data[0].data;
      this.globals.toastAlert(message, 'success'); 
      setTimeout(() => {
        /** spinner ends after 3 seconds */
        this.globals.spinner.hide();
      }, 5000);
     //  this.resetForm.reset();
       this.globals.navigate("/login");
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

  ngOnInit(): void {
  }
  onPasswordChange() {
    if (this.confirm_password.value == this.password.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }

  // getting the form control elements
  get password(): AbstractControl {
    return this.resetForm.controls['password'];
  }

  get confirm_password(): AbstractControl {
    return this.resetForm.controls['confirm_password'];
  }

  toggleFieldTextTypepin() {
    this.fieldTextTypepin = !this.fieldTextTypepin;
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

}
