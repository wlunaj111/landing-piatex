import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampannaRoutingModule } from './campanna-routing.module';
import { CampannaComponent } from './campanna.component';

import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'
import { MatSelectModule } from '@angular/material/select';
import { GestioncampannaComponent } from './gestioncampanna/gestioncampanna.component';
//import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; 




@NgModule({
  declarations: [
    CampannaComponent,
    GestioncampannaComponent,
  ],
  imports: [
    CommonModule,
    CampannaRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule
    //MatDividerModule
    
    
  ]
})
export class CampannaModule { }
