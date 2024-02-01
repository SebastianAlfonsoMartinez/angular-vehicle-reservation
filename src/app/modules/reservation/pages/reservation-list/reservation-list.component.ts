import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user-service.service';
import { UserInfoModel } from '@core/models/userInfo.model';
import { AuthService } from '@modules/auth/services/auth.service';
import { Booking } from '@core/models/booking.model';
import { PageEvent } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  user: UserInfoModel | null = null;
  hasReservations: boolean = false;
  displayedColumns: string[] = ['startDate', 'endDate', 'state', 'vehicle','image'];
  dataSource: Booking[] = [];
  pageData: Booking[] = [];

  constructor(private userService: UserService, private authService: AuthService,  private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
    const userId = this.authService.getUserIdFromToken();
    if (userId) {
      this.userService.getUserById(+userId).subscribe(user => {
        this.user = user;
        this.hasReservations = user.bookings && user.bookings.length > 0;
        if (user.bookings && user.bookings.length > 0) {
          this.dataSource = user.bookings;
          this.pageData = this.dataSource.slice(0, 10);
        } else {
          // Manejar el caso de que no haya reservas
          console.log('No hay reservas para mostrar');
        }
      }, error => {
        console.error('Error al obtener reservas del usuario:', error);
      });
    }
  }
  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pageData = this.dataSource.slice(startIndex, endIndex);
  }
  transformDate(date: string): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy, HH:mm', 'es') || '';
  }
  redirectToVehicles(): void {
    this.router.navigate(['/ruta-a-vehiculos']); // Reemplaza con la ruta correcta
  }
}
