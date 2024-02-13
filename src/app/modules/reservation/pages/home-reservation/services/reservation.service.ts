import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private readonly URL = environment.api;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  sendReservation(startDate: string, endDate: string, vehicleId: number): Observable<any>{
    const body = {
      startDate,
      endDate,
      vehicle: { id: vehicleId }
    };
    
    return this.http.post(`${this.URL}/booking/create`, body)
    .pipe(
      tap((response: any) => {
        console.log('Reserva exitosa', response);
        this.router.navigate(["/home/reservation/list"])
      })
    );
}

}
