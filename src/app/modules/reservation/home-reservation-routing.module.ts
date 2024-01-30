import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeReservationComponent } from './pages/home-reservation/home-reservation.component';
import { SessionGuard } from '@core/guards/session.guard';
import { ReservationListComponent } from './pages/reservation-list/reservation-list.component';

const routes: Routes = [
  {
    path: '',
    children:[
    {path:'main', component: HomeReservationComponent, canActivate:[SessionGuard]},
    {path:'list', component: ReservationListComponent, canActivate:[SessionGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeReservationRoutingModule { }
