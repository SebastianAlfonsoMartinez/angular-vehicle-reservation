import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeReservationRoutingModule } from './home-reservation-routing.module';
import { HomeReservationComponent } from './pages/home-reservation/home-reservation.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReservationListComponent } from './pages/reservation-list/reservation-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeReservationComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    HomeReservationRoutingModule,
    SharedModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers:[DatePipe]
})
export class HomeReservationModule { }
