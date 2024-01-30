import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeReservationRoutingModule } from './home-reservation-routing.module';
import { HomeReservationComponent } from './pages/home-reservation/home-reservation.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeReservationComponent
  ],
  imports: [
    CommonModule,
    HomeReservationRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeReservationModule { }
