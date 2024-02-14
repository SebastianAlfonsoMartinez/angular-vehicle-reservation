import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegisterPageComponent } from './register-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RegisterAuthService } from '@modules/auth/services/register-auth.service';
import { throwError } from 'rxjs';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('returns invalid form', ()=>{
    //Arrange
    const mockCredentials = {
      firstName: 'a',
      lastName: '25',
      phone: 'asdwfas',
      email: 'd152sa',
      password: '11111111111545484',
      terms: false
    }

    const firstNameForm: any = component.formRegister.get('firstName');
    const lastNameForm: any = component.formRegister.get('lastName');
    const phoneForm: any = component.formRegister.get('phone');
    const emailForm: any = component.formRegister.get('email');
    const paswwordForm: any = component.formRegister.get('password');
    const termsForm: any = component.formRegister.get('false');

    //Act
    firstNameForm?.setValue(mockCredentials.firstName);
    lastNameForm?.setValue(mockCredentials.lastName);
    phoneForm?.setValue(mockCredentials.phone);
    emailForm?.setValue(mockCredentials.email);
    paswwordForm?.setValue(mockCredentials.password);
    termsForm?.setValue(mockCredentials.terms);

    //Assert
    expect(component.formRegister.invalid).toEqual(true);
  })

  it('returns valid form', ()=>{
    //Arrange
    const mockCredentials = {
      firstName: 'pepillo',
      lastName: 'Perez',
      phone: '225487156',
      email: 'elpepe@test.com',
      password: 'pepe2024',
      terms: true
    }

    const firstNameForm: any = component.formRegister.get('firstName');
    const lastNameForm: any = component.formRegister.get('lastName');
    const phoneForm: any = component.formRegister.get('phone');
    const emailForm: any = component.formRegister.get('email');
    const paswwordForm: any = component.formRegister.get('password');
    const termsForm: any = component.formRegister.get('terms');

    //Act
    firstNameForm?.setValue(mockCredentials.firstName);
    lastNameForm?.setValue(mockCredentials.lastName);
    phoneForm?.setValue(mockCredentials.phone);
    emailForm?.setValue(mockCredentials.email);
    paswwordForm?.setValue(mockCredentials.password);
    termsForm?.setValue(mockCredentials.terms);

    //Assert
    expect(component.formRegister.valid).toEqual(true);
  })

  it('should display required error message for email when left empty', () => {
    component.formRegister.controls['email'].setValue('');
    component.formRegister.controls['email'].markAsTouched();
    fixture.detectChanges(); // Aplica los cambios para que el mensaje de error potencialmente se renderice
  
    // Intenta encontrar el elemento del mensaje de error usando el selector correcto
    const emailErrorMessage = fixture.debugElement.query(By.css('.error-message'));
  
    // Verifica que el elemento del mensaje de error esté presente
    expect(emailErrorMessage).toBeTruthy('El elemento del mensaje de error de email no se encontró en el DOM.');
    // Si deseas verificar el texto dentro del mensaje de error
    expect(emailErrorMessage.nativeElement.textContent).toContain('Este campo es obligatorio.');
  });
  

  it('should return the correct error message for the email field when it is invalid', () => {
    // Configura el valor del campo de email a uno que sabemos es inválido
    component.formRegister.controls['email'].setValue('emailNoValido');
    // Marca el campo como tocado para simular la interacción del usuario
    component.formRegister.controls['email'].markAsTouched();
    // Obtiene el mensaje de error basado en el estado actual del campo
    const errorMessage = component.getErrorMessage('email');
    // Verifica que el mensaje de error sea el esperado para un correo electrónico inválido
    expect(errorMessage).toContain('Por favor, introduce una dirección de correo electrónico válida.');
  });
  
  
  it('should call sendRegistrationCredentials on valid form submission', () => {
    // Obtén una instancia del servicio a través de TestBed
    const registerAuthService = TestBed.inject(RegisterAuthService);
    // Espía el método sendRegistrationCredentials del servicio
    spyOn(registerAuthService, 'sendRegistrationCredentials').and.callThrough();
    
    // Define mockValidCredentials con la estructura adecuada
    const mockValidCredentials = {
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      email: 'john.doe@example.com',
      password: 'password123',
      terms: true 
    };
  
    // Establece los valores del formulario
    component.formRegister.setValue({
      firstName: mockValidCredentials.firstName,
      lastName: mockValidCredentials.lastName,
      phone: mockValidCredentials.phone,
      email: mockValidCredentials.email,
      password: mockValidCredentials.password,
      terms: mockValidCredentials.terms
    });
  
    // Envía el formulario
    component.sendRegister();
  
    // Verifica que se haya llamado al método con los argumentos esperados
    expect(registerAuthService.sendRegistrationCredentials).toHaveBeenCalledWith(
      mockValidCredentials.firstName,
      mockValidCredentials.lastName,
      mockValidCredentials.phone,
      mockValidCredentials.email,
      mockValidCredentials.password
    );
  });
  

  it('should update errorRegister on failed form submission', fakeAsync(() => {
    // Obtén una instancia del servicio a través de TestBed
    const registerAuthService = TestBed.inject(RegisterAuthService);
    // Espía el método sendRegistrationCredentials del servicio
    spyOn(registerAuthService, 'sendRegistrationCredentials').and.returnValue(throwError(() => new Error('Failed to register')));
  
    // Asegúrate de que el formulario esté llenado con datos válidos antes de llamar a sendRegister
    component.formRegister.setValue({
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      email: 'john.doe@example.com',
      password: 'password123',
      terms: true
    });
  
    // Envía el formulario
    component.sendRegister();
    tick(); // Simula el paso del tiempo para operaciones asíncronas
    
    // Verifica que errorRegister se haya actualizado correctamente
    expect(component.errorRegister).toBeTrue();
  }));
  
  
  // it('should update form validity on user input', fakeAsync(() => {
  //   fixture.detectChanges(); // Asegura que los cambios se han aplicado
  
  //   // Busca el campo de entrada para email y simula la entrada del usuario
  //   const emailInput = fixture.debugElement.query(By.css('input[formControlName="email"]')).nativeElement;
  //   emailInput.value = 'test@test.com';
  //   emailInput.dispatchEvent(new Event('input'));
    
  //   // Busca el campo de entrada para password y simula la entrada del usuario
  //   const passwordInput = fixture.debugElement.query(By.css('input[formControlName="password"]')).nativeElement;
  //   passwordInput.value = '123456';
  //   passwordInput.dispatchEvent(new Event('input'));
  
  //   // No olvides incluir otros campos requeridos para que el formulario sea válido
  //   // Por ejemplo, si hay una casilla de términos que debe ser marcada:
  //   const termsCheckbox = fixture.debugElement.query(By.css('input[formControlName="terms"]')).nativeElement;
  //   termsCheckbox.click(); // Simula la marcación de la casilla
  
  //   fixture.detectChanges(); // Aplica los cambios en el DOM
  //   tick(); // Espera a que se completen las operaciones asíncronas
  
  //   expect(component.formRegister.valid).toBeTruthy(); // Verifica que el formulario sea válido
  // }));
  
  

  it('should display validation message when email is invalid', () => {
    const input = fixture.debugElement.query(By.css('input[formControlName="email"]')).nativeElement;
    input.value = 'invalid-email';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    const message = fixture.debugElement.query(By.css('.error-message')).nativeElement.textContent;
    expect(message).toContain('Por favor, introduce una dirección de correo electrónico válida.');
  });
  
  // it('should navigate to login page on successful registration', fakeAsync(() => {
  //   spyOn(component.registerAuth, 'sendRegistrationCredentials').and.returnValue(of({success: true}));
  //   const router = TestBed.inject(Router);
  //   spyOn(router, 'navigate');
  
  //   component.sendRegister();
  //   tick();
  
  //   expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  // }));
  



});
