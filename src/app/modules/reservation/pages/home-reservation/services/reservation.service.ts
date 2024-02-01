import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '@core/models/user.model';
import { VehicleModel } from '@core/models/vehicle.model';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  sendeReservation(startDate: Date, endDate: Date, vehicle: VehicleModel, user: UserModel): Observable<any>{
    const body = {
      startDate,
      endDate,
      vehicle,
      user
    }
    return this.http.post(`${this.URL}/booking/create`, body)
    .pipe(
      tap((response: any) =>{
        console.log('reserva exitosa')
        
      })
    )
  }
}
