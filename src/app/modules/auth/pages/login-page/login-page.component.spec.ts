import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginPageComponent } from './login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
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
  

})

