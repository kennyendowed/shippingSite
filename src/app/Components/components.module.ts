import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgxSpinnerModule } from "ngx-spinner";
import { RequestResetComponent } from './forms/auth/forgotPassword/request-reset/request-reset.component';
import { ResetPasswordComponent } from './forms/auth/forgotPassword/reset-password/reset-password.component';
import { LoginComponent } from './forms/auth/login/login.component';
import { RegisterComponent } from './forms/auth/register/register.component';
import { VerifyAccountComponent } from './forms/auth/verify-account/verify-account.component';
import { CustomerFooterComponent } from './layout/customer/customer-footer/customer-footer.component';
import { CustomerHeaderComponent } from './layout/customer/customer-header/customer-header.component';
import { PublicFooterComponent } from './layout/public/public-footer/public-footer.component';
import { PublicHeaderComponent } from './layout/public/public-header/public-header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import {ServiceComponent } from './pages/service/service.component';
import {ConsultationsComponent} from './pages/consultations/consultations.component';
import { TmNgOdometerModule } from 'tm-ng-odometer';
import { TradeHeaderComponent } from './layout/trade/trade-header/trade-header.component';
import { TradeFooterComponent } from './layout/trade/trade-footer/trade-footer.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { WelcomeComponent } from './pages/welcome/welcome.component';

// import {MaterialModule} from './material/material.module';

export const component = [TradeHeaderComponent,TradeFooterComponent,
  ConsultationsComponent,WelcomeComponent,ServiceComponent,ContactComponent,AboutComponent, HomeComponent,PublicHeaderComponent,PublicFooterComponent,RequestResetComponent,ResetPasswordComponent,
  CustomerFooterComponent,CustomerHeaderComponent,RegisterComponent,LoginComponent,VerifyAccountComponent
]


@NgModule({
    imports: [TmNgOdometerModule ,CollapseModule,NgxSpinnerModule,CommonModule,RouterModule,NgxIntlTelInputModule,ReactiveFormsModule],
    exports: component,
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: component
})
export class ComponentModule { }
