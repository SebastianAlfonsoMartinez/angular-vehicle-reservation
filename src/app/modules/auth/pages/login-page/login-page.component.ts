import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSessionMessage: string = '';
  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({});
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]),
        terms: new FormControl(false, [ 
        Validators.requiredTrue 
      ])
      }
    )
  }

  sendLogin(): void {
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.value;
      this.authService.sendCredentials(email, password).subscribe({
        next: (response) => {
          console.log('Sesión iniciada con éxito', response);
  
        },
        error: (error) => {
          console.log(email, password);
          
          this.errorSession = true;
          // Suponiendo que tu API envía un estado 403 para credenciales incorrectas
          if (error.status === 403) {
            this.errorSessionMessage = 'Correo electrónico o contraseña incorrectos.';
          } else {
            // Otros errores de servidor
            this.errorSessionMessage = 'Ocurrió un error al intentar iniciar sesión. Por favor, inténtelo de nuevo.';
          }
          console.error('Error al iniciar sesión', error);
        }
      });
    } else {
      console.error('El formulario no es válido');
    }
  }

}
