import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ComponentModule } from 'src/app/Components/components.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { CommonModule } from '@angular/common';


export const component = [
  AuthComponent,AuthPageComponent
]
const routes: Routes = [{
  path:'', component: AuthComponent,
   children:[
   { 
       path: '', component: AuthPageComponent
},
  
  ]
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ComponentModule
  ],
  declarations: [component], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
