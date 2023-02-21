import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampannaRoutingModule } from './campanna-routing.module';
import { CampannaComponent } from './campanna.component';

import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CampannaComponent
  ],
  imports: [
    CommonModule,
    CampannaRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    
    
  ]
})
export class CampannaModule { }
