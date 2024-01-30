import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainVehicleComponent } from './pages/main-vehicle/main-vehicle.component';
import { VehicleDetailsComponent } from './pages/vehicle-details/vehicle-details.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'main', component: MainVehicleComponent},
      {path: 'details', component: VehicleDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
