import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { MainVehicleComponent } from './pages/main-vehicle/main-vehicle.component';


@NgModule({
  declarations: [
    MainVehicleComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
