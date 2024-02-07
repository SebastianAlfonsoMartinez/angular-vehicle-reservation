import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UserService } from './services/user-service.service';
import { UserInfoModel } from '@core/models/userInfo.model';
import { Booking } from '@core/models/booking.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit, OnDestroy {
  user: UserInfoModel | null = null;
  hasReservations: boolean = false;
  displayedColumns: string[] = ['startDate', 'endDate', 'state', 'vehicle', 'image'];
  dataSource: Booking[] = [];
  pageData: Booking[] = [];
  orderDirection: 'asc' | 'desc' = 'asc';
  optionSort:{property: string | null, order:string} = {property: null, order: 'asc'}

  private unsubscribe$ = new Subject<void>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private userService: UserService,
    private datePipe: DatePipe,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.userService.getUserInfo()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(user => {
        this.user = user;
        this.hasReservations = user.bookings && user.bookings.length > 0;
        this.dataSource = user.bookings || [];
        this.sortBookings('asc'); // Ordena inicialmente en orden ascendente
        this.initializePageData();
      }, error => {
        console.error('Error al obtener reservas del usuario:', error);
      });
  }

  sortBookings(direction: 'asc' | 'desc'): void {
    this.dataSource.sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();
      return direction === 'asc' ? dateA - dateB : dateB - dateA;
    });
    this.updatePageData();
  }

  initializePageData(): void {
    // Establece los datos de la primera página después de ordenar
    this.pageData = this.dataSource.slice(0, 10);
    if (this.paginator) {
      this.paginator.pageIndex = 0; // Resetea al primer página
      this.paginator.length = this.dataSource.length;
    }
  }

  updatePageData(): void {
    if (!this.paginator) return;
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.pageData = this.dataSource.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent): void {
    this.updatePageData();
  }

  redirectToVehicles(): void {
    this.router.navigate(['/home/vehicle/main']);
  }
  toggleOrderDirection(): void {
    this.orderDirection = this.orderDirection === 'asc' ? 'desc' : 'asc'; // Cambia la dirección
    this.sortBookings(this.orderDirection); // Reordena las reservas
  }
  changeSort(property: string): void{
    const {order} = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc': 'asc'
    }
    
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

