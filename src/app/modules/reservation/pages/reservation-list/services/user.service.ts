import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfoModel } from '@core/models/userInfo.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  
  getUserInfo(): Observable<UserInfoModel> {
    return this.http.get<UserInfoModel>(`${this.URL}/user/info`);
  }
}
