import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleModel } from '@core/models/vehicle.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardServicesService {

  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  getAllVehicles$(offset: number, limit: number): Observable<any> { 
    return this.http.get<any>(`${this.URL}/vehicle/all/${offset}/${limit}`); 
  }
  getAllVehiclesForShuffle$(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(`${this.URL}/vehicle/all/0/40`);
}
}
