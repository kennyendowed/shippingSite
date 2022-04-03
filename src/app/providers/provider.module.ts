import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageProvider } from './core/storage';
import { RequestProvider } from './core/request';
import { GlobalsProvider } from './core/globals';
import { UserProvider } from './features/users';



@NgModule({
  providers:[CommonModule,StorageProvider,GlobalsProvider,RequestProvider,UserProvider],
  declarations: [
  ],
  imports: [

  ]
})
export class ProviderModule { }
