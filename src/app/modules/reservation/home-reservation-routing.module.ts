import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeReservationComponent } from './pages/home-reservation/home-reservation.component';
import { SessionGuard } from '@core/guards/session.guard';

const routes: Routes = [
  {
    path: '',
    children:[
    {path:'', component: HomeReservationComponent, canActivate:[SessionGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeReservationRoutingModule { }
