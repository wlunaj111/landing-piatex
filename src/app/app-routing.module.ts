import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  { path: 'landing', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: '**', redirectTo: 'landing'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
