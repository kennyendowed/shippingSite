import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/layout/customer/sidebar/sidebar.component';
import { ComponentModule } from './Components/components.module';
import { ErrorComponent } from './pages/error/error.component';
import { ProviderModule } from './providers/provider.module';
import { AuthGuard } from './guards/auth/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { NgxAgoraModule } from 'ngx-agora';
import { environment } from  '../environments/environment.prod';
import { PagesComponentModule } from './pages/pages.module';
// import { NgxboostrapModule} from './Components/ngxBoostrap/ngxboostrap.module';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ButtonsModule } from 'ngx-bootstrap/buttons';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
// import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   suppressScrollX: true
// };

// BsDropdownModule.forRoot(),
// PerfectScrollbarModule, BsDropdownModule,
// ButtonsModule.forRoot(),

// ,{
//   provide: PERFECT_SCROLLBAR_CONFIG,
//   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
// }


@NgModule({
  declarations: [
     AppComponent,ErrorComponent,SidebarComponent
  ],
  imports: [  
    NgxAgoraModule.forRoot({
      AppID: environment.agora.appId,
        }), BrowserModule,CommonModule,ProviderModule,AppRoutingModule,PagesComponentModule,ComponentModule, BrowserAnimationsModule, ToastrModule.forRoot(),HttpClientModule
  ],
  providers:[ AuthGuard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
