import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from 'src/app/Components/components.module';
import { TradeComponent } from './trade.component';
import { TradeWelcomeComponent } from './Tradewelcome/Tradewelcome.component';

 const routes: Routes = [{
   path:'', component: TradeComponent, children:[
    { 
        path:'', component: TradeWelcomeComponent
    },
   
   ]
}]

export const component = [
  TradeComponent, TradeWelcomeComponent
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
export class TradeModule { }
