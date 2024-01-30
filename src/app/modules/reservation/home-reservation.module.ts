import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeReservationRoutingModule } from './home-reservation-routing.module';
import { HomeReservationComponent } from './pages/home-reservation/home-reservation.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReservationListComponent } from './pages/reservation-list/reservation-list.component';


@NgModule({
  declarations: [
    HomeReservationComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    HomeReservationRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeReservationModule { }
