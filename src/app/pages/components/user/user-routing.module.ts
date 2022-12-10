import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', 
    component: UserComponent,
    data: {
      name: 'Listagem'
    }
  },
  { 
    path: 'new', 
    component: UserFormComponent,
    data: {
      name: 'Novo usuario'
    }
  },
  { 
    path: 'edit/:id', 
    component: UserEditComponent,
    data: {
      name: 'Editar Usuarip'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
