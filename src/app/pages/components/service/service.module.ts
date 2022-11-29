import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceEditComponent } from './service-edit/service-edit.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { CoreModule } from 'keycloak-angular';


@NgModule({
  declarations: [
    ServiceFormComponent,
    ServiceEditComponent,
    ServiceListComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    CoreModule
  ]
})
export class ServiceModule { }
