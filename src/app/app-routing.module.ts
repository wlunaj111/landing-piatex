import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProjectComponent } from './modules/admin/dashboard/project/project.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },

  {
    path: '',
    component: SidenavComponent,
    //canActivate: [AuthGuard],
    //data: {permiso: ['login_admin_usuario']},
    children: [
      {
        path: 'dashboard',
        component: ProjectComponent,
        //canActivate: [AuthGuard],
        //data: {permiso: ['view_dashboard']}
      },
      {
         path: 'project',
         loadChildren: () => import('./modules/admin/dashboard/project/project.module').then(m => m.ProjectModule),
         //canActivate: [AuthGuard],
         //data: {permiso: ['view_advertiser']},      
      },
      // {
      //   path: 'sales',
      //   loadChildren: () => import('./modules/sales/sales.module').then(m => m.SalesModule),
      //   canActivate: [AuthGuard],
      //   data: {permiso: ['sales_payment']},
      // },

    ]
  },

  { path: 'landing', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
  //{ path: 'project', loadChildren: () => import('./modules/admin/dashboard/project/project.module').then(m => m.ProjectModule) },
  { path: '**', redirectTo: 'landing'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
