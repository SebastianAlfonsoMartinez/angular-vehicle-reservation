import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleModel } from '@core/models/vehicle.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  getVehicleById(id: string): Observable<VehicleModel> { 
    return this.http.get<VehicleModel>(`${this.URL}/vehicle/search/${id}`); 
  }
}
