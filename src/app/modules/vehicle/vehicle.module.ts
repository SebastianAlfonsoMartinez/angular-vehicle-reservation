import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { MainVehicleComponent } from './pages/main-vehicle/main-vehicle.component';
import { VehicleDetailsComponent } from './pages/vehicle-details/vehicle-details.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MainVehicleComponent,
    VehicleDetailsComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    SharedModule,
    MatPaginatorModule
  ]
})
export class VehicleModule { }
