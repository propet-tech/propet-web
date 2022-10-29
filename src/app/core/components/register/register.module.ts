import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  registerRoutingModule } from './register-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    registerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // ToastrModule
  ]
})
export class registerModule { }
