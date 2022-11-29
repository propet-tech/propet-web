import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {MatTableModule} from '@angular/material/table'; 
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule, KeycloakBearerInterceptor } from 'keycloak-angular';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    CoreModule
  ],
})
export class UserModule { }
