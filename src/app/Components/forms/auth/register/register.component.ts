import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { GlobalsProvider } from 'src/app/providers/core/globals';
import { UserProvider } from 'src/app/providers/features/users';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fieldTextType: boolean;
  fieldTextTypepin:boolean;
  repeatFieldTextType: boolean;
  loading = false;
   separateDialCode = false;
  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Nigeria, CountryISO.Ghana];
  phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])
    ),
    phone: new FormControl("",   Validators.compose([Validators.required])),
    password: new FormControl(
      "",
      Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]),

    ),
    confirm_password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ])),
    gender: new FormControl('', Validators.compose([
      Validators.required
    ])),
    firstname: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
  
    lastname: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),

  });
  validation_messages = {
    email: [
      { type: "required", message: "Email is required." },
      {
        type: "minlength",
        message: "Email must be at least 5 characters long."
      },
      { type: "pattern", message: "Email must be valid." },
      { type: "email", message: "Email must be valid" }
    ],
    
    firstname: [
      { type: "required", message: "FirstName is required." },
      {
        type: "minlength",
        message: "FirstName must be at least 3 characters long."
      }
    ],
    lastname: [
      { type: "required", message: "LastName is required." },
      {
        type: "minlength",
        message: "LastName must be at least 3 characters long."
      }
    ],
    gender: [
      { type: "required", message: "Gender is required." },
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

  constructor(
     private uData: UserProvider,
    private globals: GlobalsProvider
  ) {
  }


  async register(form : any) {
   this.globals.spinner.show();
   this.uData.register(form)
   .then(async (register) => {
    if(register) {
      const message=register.data[0].data;
      this.globals.toastAlert(message, 'success'); 
      setTimeout(() => {
        /** spinner ends after 3 seconds */
        this.globals.spinner.hide();
      }, 5000);
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
    return this.registerForm.controls['password'];
  }

  get confirm_password(): AbstractControl {
    return this.registerForm.controls['confirm_password'];
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
