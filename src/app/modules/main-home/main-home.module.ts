import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHomeRoutingModule } from './main-home-routing.module';
import { MainHomePageComponent } from './pages/main-home-page/main-home-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MainHomePageComponent
  ],
  imports: [
    CommonModule,
    MainHomeRoutingModule,
    SharedModule
  ]
})
export class MainHomeModule { }
