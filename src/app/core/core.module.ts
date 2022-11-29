import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component'
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ SidebarComponent, NavbarComponent, RegisterComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    RegisterComponent,
  ],
  providers: []
})
export class CoreModule { }
