import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {MatTableModule} from '@angular/material/table'; 
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule, KeycloakBearerInterceptor } from 'keycloak-angular';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [
    UserComponent,
    UserFormComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    CoreModule,
  ],
})
export class UserModule { }
