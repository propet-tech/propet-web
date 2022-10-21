import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [ SidebarComponent, NavbarComponent, LoginComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    LoginComponent
  ],
  providers: []
})
export class CoreModule { }
