import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceEditComponent } from './service-edit/service-edit.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceListComponent } from './service-list/service-list.component';

const routes: Routes = [
  {path: '', component: ServiceListComponent},
  {path: 'edit/:id', component: ServiceEditComponent},
  {path: 'new', component: ServiceFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
