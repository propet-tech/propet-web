import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ToastrModule,
    CoreModule
  ]
})
export class HomeModule { }
