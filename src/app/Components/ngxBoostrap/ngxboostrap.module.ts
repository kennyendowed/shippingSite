import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';

export const componentModules = [
  AccordionModule,
  AlertModule,
  ButtonsModule,
  FormsModule,
  CarouselModule,
  CollapseModule
]


@NgModule({
  declarations: [componentModules],
  imports: [
    CommonModule,componentModules
  ],
  exports: [
    componentModules
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class NgxboostrapModule { }
