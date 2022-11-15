import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/components/guard/auth.guard';
import { RegisterComponent } from './core/components/register/register.component';

const routes: Routes = [
  { path:'', loadChildren: () => import('./pages/components/home/home.module').then(m => m.HomeModule)},
  {path: 'usuario', loadChildren: () => import('./pages/components/user/user.module').then(m => m.UserModule)},
  { path: 'login',  loadChildren: () => import('./core/components/login/login.module').then(m => m.LoginModule) },
  { path: 'register',   loadChildren: () => import('./core/components/register/register.module').then(m => m.registerModule)},
  { path: 'pet',   loadChildren: () => import('./pages/components/pet/pet.module').then(m => m.PetModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
