import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginPageComponent } from './login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { AuthService } from '@modules/auth/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Patron AAA
  it('returns invalid form', () => {
    //Arrange 
    const mockCredentials = {
      email: 'sad584545',
      password: '55555555555555555555555555',
      terms: false
    }
    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    //Act
    emailForm?.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);
    //Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  it('returns valid form', () => {
    //Arrange 
    const mockCredentials = {
      email: 'test@test.com',
      password: '1234567',
      terms: true
    }
    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');
    const checkForm: any = component.formLogin.get('terms')
    //Act
    emailForm?.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);
    checkForm.setValue(mockCredentials.terms)
    //Assert
    expect(component.formLogin.invalid).toEqual(false);
  });

  it('button should have the word "Iniciar sesión"', () => {

    const elementRef = fixture.debugElement.query(By.css('.btn.btn-primary'));
    const getInnerText = elementRef.nativeElement.innerText;

    expect(getInnerText).toEqual('Iniciar sesión');
  });

  it('should call the authService with credentials on valid form submission', () => {
    // Obtén el servicio de autenticación a través del inyector de la prueba
    const authService = TestBed.inject(AuthService);
    const authServiceSpy = spyOn(authService, 'sendCredentials').and.returnValue(of({ token: '123' }));

    // Configura el formulario con datos válidos
    component.formLogin.setValue({
      email: 'test@test.com',
      password: '123456',
      terms: true
    });

    // Realiza la llamada al método de login
    component.sendLogin();

    // Verifica que el espía haya sido llamado con las credenciales correctas
    expect(authServiceSpy).toHaveBeenCalledWith('test@test.com', '123456');
  });

  it('should display an error message when login credentials are incorrect', fakeAsync(() => {
    // Espía y configura la respuesta simulada del servicio
    const authServiceSpy = TestBed.inject(AuthService);
    spyOn(authServiceSpy, 'sendCredentials').and.returnValue(
      throwError(() => new HttpErrorResponse({status: 403, statusText: 'Forbidden'}))
    );
  
    // Configura valores válidos para el formulario
    component.formLogin.controls['email'].setValue('user@example.com');
    component.formLogin.controls['password'].setValue('password123');
    component.formLogin.controls['terms'].setValue(true); // Asegúrate de marcar la casilla si es necesaria
  
    // Verifica que el formulario sea válido antes de intentar el envío
    expect(component.formLogin.valid).toBeTrue();
  
    // Intenta enviar el formulario
    component.sendLogin();
  
    // Espera a que se completen las operaciones asíncronas y aplica los cambios en el DOM
    tick();
    fixture.detectChanges();
  
    // Verifica el estado del error en el componente
    expect(component.errorSession).toBeTrue();
    expect(component.errorSessionMessage).toContain('Correo electrónico o contraseña incorrectos');
  
    // Busca el elemento en el DOM que contiene el mensaje de error
    const errorDiv = fixture.debugElement.query(By.css('.alert.alert-danger'));
    expect(errorDiv).toBeTruthy();
    expect(errorDiv.nativeElement.textContent).toContain('Correo electrónico o contraseña incorrectos');
  }));
  

  it('should enable submit button when form is valid', () => {
    component.formLogin.setValue({
      email: 'test@test.com',
      password: '123456',
      terms: true
    });
    fixture.detectChanges(); // Refleja los cambios en el DOM
  
    // Asegúrate de que el formulario sea válido
    expect(component.formLogin.valid).toBeTruthy();
  
    // Usa un selector que coincida con tu botón, como la clase CSS si es única
    const submitButton = fixture.debugElement.query(By.css('.btn.btn-primary'));
  
    // Verifica que el botón exista y no esté deshabilitado
    expect(submitButton).toBeTruthy('El botón de envío no se encontró en el DOM.');
    expect(submitButton.nativeElement.disabled).toBeFalse();
  });
  
  
  



})

