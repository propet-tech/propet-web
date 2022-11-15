import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PetListComponent,
    PetFormComponent
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PetModule { }
