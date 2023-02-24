import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampannaComponent } from './campanna.component';

const routes: Routes = [
  {
    path: '',
    component: CampannaComponent
    //canActivate: [AuthGuard],
    //data: {permiso: ['view_medio']}
  },
  // {
  //   path: 'gestioncampanna',
  //   component: CampannaComponent,
  //   //canActivate: [AuthGuard],
  //   //data: {permiso: ['sales_payment']},
  //   },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampannaRoutingModule { }
