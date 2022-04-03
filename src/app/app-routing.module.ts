import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [{path: '',  children:[
  {path: '',  redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome',   loadChildren: () => import('./pages/public/public.module').then(mod => mod.PublicModule)},
  {path: 'Emzhub-Exchange-Hub',   loadChildren: () => import('./pages/trade/trade.module').then(mod => mod.TradeModule)},
  {path: 'About',loadChildren: () => import('./pages/public/public.module').then( mod => mod.PublicModule)},
  {path: 'Contact',loadChildren: () => import('./pages/public/public.module').then( mod => mod.PublicModule)},
  {path: 'Service',loadChildren: () => import('./pages/public/public.module').then( mod => mod.PublicModule)},
 
  // Account pages
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then( mod => mod.AuthModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/auth.module').then( mod => mod.AuthModule)
  },
  {
    path: 'verifyAccount',
    loadChildren: () => import('./pages/auth/auth.module').then( mod => mod.AuthModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/auth/auth.module').then( mod => mod.AuthModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./pages/auth/auth.module').then( mod => mod.AuthModule)
  },
  // {
  //   path: 'reset/:id',
  //   loadChildren: () => import('./pages/auth/auth.module').then( mod => mod.AuthModule)
  // },
  {
    path: 'overview',
    //  canActivate: [AuthGuard],
    loadChildren: () => import('./pages/customer/customer.module').then( mod => mod.CustomerModule)
  },
   {path: 'error',
   component:ErrorComponent},
  {path: '**', redirectTo: '/error' }

]
}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
