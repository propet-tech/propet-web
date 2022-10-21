import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './pages/components/home/home.component';
import { UserComponent } from './pages/components/user/user.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  {path: 'usuario', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
