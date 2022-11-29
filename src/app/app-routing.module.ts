import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/components/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: {
      name: 'Propet'
    }, 
    children: [
      {
        path:'home',
        loadChildren: () => import('./pages/components/home/home.module').then(m => m.HomeModule),
        data: {
          name: 'Home'
        }
      },
      { 
        path: 'usuario', 
        loadChildren: () => import('./pages/components/user/user.module').then(m => m.UserModule),
        data: {
          name: 'Usuários'
        }
      },
      { 
        path: 'pet',
        loadChildren: () => import('./pages/components/pet/pet.module').then(m => m.PetModule),
        data: {
          name: 'Pets'
        }
      },
      {
        path: 'service',
        loadChildren: () => import('./pages/components/service/service.module').then(m => m.ServiceModule),
        data: {
          name: 'Serviços'
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
