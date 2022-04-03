import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import { GlobalsProvider } from 'src/app/providers/core/globals';
import { UserProvider } from 'src/app/providers/features/users';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(
    private globals: GlobalsProvider,
    private uData: UserProvider
  ) {
  }

 canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.uData.isLoggedOn();
        if(resp) resolve(true);
      } catch(ex) {
        this.globals.toastAlert("Not logged in","warning");
        this.globals.navigate('login');       
        reject(false);
      }
    })
  }
  
}


