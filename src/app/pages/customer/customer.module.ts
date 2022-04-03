import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentModule } from 'src/app/Components/components.module';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = 
[{
    path: '', 
    component: CustomerComponent,
    children: [
        { path: '', component: DashboardComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'profile', component: DashboardComponent }
    ]
}]

export const component = [
    DashboardComponent, CustomerComponent
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
export class CustomerModule { }
