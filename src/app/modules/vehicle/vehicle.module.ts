import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { MainVehicleComponent } from './pages/main-vehicle/main-vehicle.component';
import { VehicleDetailsComponent } from './pages/vehicle-details/vehicle-details.component';


@NgModule({
  declarations: [
    MainVehicleComponent,
    VehicleDetailsComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
