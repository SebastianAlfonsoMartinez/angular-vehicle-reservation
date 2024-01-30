import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { JwtPayload, jwtDecode } from "jwt-decode";
import { CustomJwtPayload } from '@core/models/CustomJwtPayload.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;
  private userInfoSource = new BehaviorSubject<{ fullName?: string; roles?: string[]; id_user?: number }>({});
  userInfo$ = this.userInfoSource.asObservable();

  constructor(private http: HttpClient, private cookie: CookieService,
    private router: Router) { };

  sendCredentials(email: string, password: string): Observable<any>{
    
    const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/authenticate`, body, {responseType: 'text'})
    .pipe(
      tap((response: any)=>{
        this.cookie.set('token', response, 1, '/');
        this.router.navigate(['/home/main'])
      })
    )
  }

  getTokenClaims(): any {
    const token = this.cookie.get('token');
    if (token) {
      try {
        const decodedToken = jwtDecode<CustomJwtPayload>(token);
        console.log(decodedToken);
  
        // Actualiza la información del usuario a través del BehaviorSubject
        this.setUserInfo({
          fullName: decodedToken.fullName,
          roles: decodedToken.roles,
          id_user: decodedToken.id_user
        });
  
      } catch (Error) {
        console.error('Error decodificando el token:', Error);
        return null;
      }
    }
    return null;
  }
  

  setUserInfo(userInfo: { fullName?: string; roles?: string[]; id_user?: number }): void {
    this.userInfoSource.next(userInfo);
  }
  
}
