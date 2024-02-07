import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Lista de endpoints que no requieren token
    const noAuthRequired = [
      '/vehicle/all/',
      // otros endpoints si es necesario
    ];
  
    const requiresAuth = !noAuthRequired.some(url => request.url.includes(url));
  
    if (requiresAuth) {
      const token = this.cookieService.get('token');
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }
  
    return next.handle(request);
  }
}
