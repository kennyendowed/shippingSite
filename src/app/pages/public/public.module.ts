import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ComponentModule } from 'src/app/Components/components.module';

 const routes: Routes = [{
   path:'', component: PublicComponent, children:[
    { 
        path:'', component: WelcomeComponent
    },
   
   ]
}]

export const component = [
    PublicComponent, WelcomeComponent
]

@NgModule({
    imports: [
      RouterModule.forChild(routes),
      CommonModule,
      ComponentModule
    ],
    declarations: [component], 
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
export class PublicModule { }
