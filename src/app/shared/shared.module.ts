import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainHomeImageComponent } from './components/main-home-image/main-home-image.component';
import { VehicleSliderComponent } from './components/vehicle-slider/vehicle-slider.component';
import { MainHomeCardComponent } from './components/main-home-card/main-home-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainHeaderComponent,
    MainFooterComponent,
    MainHomeImageComponent,
    VehicleSliderComponent,
    MainHomeCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainHeaderComponent,
    MainFooterComponent,
    MainHomeImageComponent,
    VehicleSliderComponent,
    MainHomeCardComponent
  ]
})
export class SharedModule { }
