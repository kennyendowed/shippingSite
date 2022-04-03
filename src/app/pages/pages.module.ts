import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PublicModule } from "./public/public.module";
import { TradeModule } from "./trade/trade.module";



export const component = [
  
  ]

  export const Compmodules =[FormsModule,CommonModule,RouterModule,ReactiveFormsModule]
  
  
  @NgModule({
      imports: [Compmodules],
      exports: component,
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [component]
  })
  export class PagesComponentModule { }