import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserInfoModel } from '@core/models/userInfo.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;
  private userInfoSource = new BehaviorSubject<UserInfoModel | null>(null);
  userInfo$ = this.userInfoSource.asObservable();

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) {}

  sendCredentials(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.URL}/auth/authenticate`, body, { responseType: 'text' })
      .pipe(
        tap((token: string) => {
          this.cookie.set('token', token, 1, '/');
          this.getUserInfo();
          this.router.navigate(['/home/main']);
        })
      );
  }

  getUserInfo(): void {
    this.http.get<UserInfoModel>(`${this.URL}/user/info`).subscribe({
      next: (userInfo) => {
        this.userInfoSource.next(userInfo);
      },
      error: (error) => {
        console.error('Error obteniendo la información del usuario:', error);
        this.logout(); // Considera llamar a logout si hay un error para limpiar el estado
      }
    });
  }

  logout(): void {
    this.cookie.delete('token', '/');
    this.userInfoSource.next(null); // Reset userInfo
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return this.cookie.check('token');
  }

  setUserInfo(userInfo: UserInfoModel): void {
    this.userInfoSource.next(userInfo);
  }


}
