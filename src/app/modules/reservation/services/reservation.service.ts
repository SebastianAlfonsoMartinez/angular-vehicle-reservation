import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationDetail } from '@core/models/reservation.model';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private readonly URL = environment.api

  constructor(private http: HttpClient, private router: Router) { }

  sendReservationDate(startDate: string, endDate: string, vehicleId: number, userId: number): Observable<any> { 
    const body = {
      startDate,
      endDate,
      vehicle: { id: vehicleId },
      user: { id: userId }
    };
    return this.http.post<ReservationDetail>(`${this.URL}/booking/create`, body)
      .pipe(
        tap((response: any) => {
          this.router.navigate(['/home/reservation/list']);
        })
      );
  }
}
