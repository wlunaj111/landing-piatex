import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampannaComponent } from './campanna.component';

const routes: Routes = [{ path: '', component: CampannaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampannaRoutingModule { }
