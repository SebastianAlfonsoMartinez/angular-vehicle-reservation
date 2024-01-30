import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';


const routes: Routes = [
  {
    path: 'main',
    loadChildren:() => import('@modules/main-home/main-home.module').then(m => m.MainHomeModule)
  },
  {
    path: 'reservation',
    loadChildren:() => import('@modules/reservation/home-reservation.module').then(m => m.HomeReservationModule)
  },
  {
    path: 'vehicle',
    loadChildren:() => import('@modules/vehicle/vehicle.module').then(m => m.VehicleModule)
  }

  // {
  //   path: '**',
  //   redirectTo: '/home'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
