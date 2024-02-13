import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { of, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

const userInfoMock = {
  id: '12345',
  email: 'test@test.com',
  name: 'Test User',
  roles: ['user']
};

// Definir expectedToken en un ámbito accesible para beforeEach y los tests
const expectedToken = 'eyasdlkokfnmlkaskndadasasddsgfasfdasxasd';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: { post: jasmine.Spy, get: jasmine.Spy };
  let cookieServiceSpy: jasmine.SpyObj<CookieService>;

  describe('AuthService', () => {
    let service: AuthService;
    let httpClientSpy: { post: jasmine.Spy, get: jasmine.Spy };
    let cookieServiceSpy: jasmine.SpyObj<CookieService>;
    let router: Router; 

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          RouterTestingModule.withRoutes([
            { path: 'home/main', component: DummyComponent }
          ])
        ],
        providers: [
          { provide: CookieService, useValue: jasmine.createSpyObj('CookieService', ['set', 'delete', 'check']) }
        ]
      }).compileComponents();
    
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
      
      // Asegúrate de que el mock de 'post' retorne un Observable, como lo hace el HttpClient real.
      // Si sendCredentials espera un texto como respuesta, asegúrate de envolver ese texto en un Observable.
      httpClientSpy.post.and.returnValue(of(expectedToken)); 
      
      httpClientSpy.get.and.returnValue(of(userInfoMock)); // Asume que userInfoMock es la respuesta esperada por cualquier llamada a 'get'.
      
      cookieServiceSpy = TestBed.inject(CookieService) as jasmine.SpyObj<CookieService>;
      service = new AuthService(httpClientSpy as any, cookieServiceSpy, TestBed.inject(Router) as any);
      router = TestBed.inject(Router);
    });
    
    @Component({ template: '' })
    class DummyComponent {}
    
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('must return token', (done: DoneFn) => {
      const user = { email: 'test@test.com', password: '12345678' };
      service.sendCredentials(user.email, user.password).subscribe(token => {
        // Ahora expectedToken es accesible aquí
        expect(token).toEqual(expectedToken);
        done();
      }, done.fail);
    });

    it('should handle login error', (done: DoneFn) => {
      const errorResponse = new ErrorEvent('Unauthorized', {
        message: 'Invalid credentials',
      });
      httpClientSpy.post.and.returnValue(throwError(() => errorResponse));
    
      service.sendCredentials('wrong', 'credentials').subscribe({
        next: () => done.fail('Expected an error, not credentials'),
        error: (error) => {
          expect(error).toBe(errorResponse);
          done();
        }
      });
    });
    
    it('should clear the token and redirect on logout', () => {
      const navigateSpy = spyOn(router, 'navigate');
      
      service.logout();
    
      expect(cookieServiceSpy.delete).toHaveBeenCalledWith('token', '/');
    });
    

    it('should return true if the user is logged in', () => {
      cookieServiceSpy.check.and.returnValue(true);
    
      expect(service.isLoggedIn()).toBeTrue();
    });
    
    it('should return false if the user is not logged in', () => {
      cookieServiceSpy.check.and.returnValue(false);
    
      expect(service.isLoggedIn()).toBeFalse();
    });
    
  })
});