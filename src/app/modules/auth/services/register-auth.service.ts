import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterAuthService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient, private cookie: CookieService,
    private router: Router) { };
  
  sendRegistrationCredentials(firstName: string, lastName: string, phone: string, email: string, password: string): Observable<any>{
    const body = {
      firstName,
      lastName,
      phone,
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/register`, body, {responseType: 'text'})
    .pipe(
      tap((response: any)=>{
        this.cookie.set('token', response, 1, '/');
        this.router.navigate(['/home/main'])
      })
    )
  }
}
