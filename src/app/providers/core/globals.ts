import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestProvider } from './request';
import { config, accountsInfoModel } from 'src/app/models/model';
import { StorageProvider } from './storage';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class GlobalsProvider {

  loader: boolean = false;
  refresh: boolean = true;
  config: config = {
    jwt: null,
    login: false,
    country: null
  }

  userdata: accountsInfoModel;

  constructor(
    public toastCtrl: ToastrService,
    public api: RequestProvider,
    public router: Router,
    public storage: StorageProvider,
     public spinner: NgxSpinnerService
  ) {

  }


  async toastAlert(message: string, type: string) {
    switch (type) {
      case 'success':
        this.toastCtrl.success(message, type, {
          timeOut: 3000,
        });
        break;
      case 'error':
        this.toastCtrl.error(message, type, {
          timeOut: 3000,
        });
        break;
      case 'info':
        this.toastCtrl.info(message, type, {
          timeOut: 3000,
        });
        break;
      case 'warning':
        this.toastCtrl.warning(message, type, {
          timeOut: 3000,

        });
        break;

      default:
        break;
    }

  }


  objectToArray = (obj: object) => {
    var array = [], tempObject;
    for (var key in obj) {
      tempObject = obj[key];
      // if (typeof obj[key] == "object") {
      //     tempObject = this.objectToArray(obj[key]);
      // }
      array.push(tempObject);
      // array[key] = tempObject;
    }
    return array;
  }

  arrayToObject = (arr = []) => {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
  }

  doRefresh($ent) {
    setTimeout(() => {
      console.log('Async operation has ended');
      $ent.target.complete();
    }, 2000);
  }

  navigate(path: string) {
    let route = this.router;
      route.navigateByUrl(path);
  }



}
