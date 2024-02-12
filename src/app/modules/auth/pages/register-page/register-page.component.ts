import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterAuthService } from '@modules/auth/services/register-auth.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{
  errorRegister: boolean =  false;
  formRegister: FormGroup = new FormGroup({});
  mainMenu: {defaultOptions: Array<any>, titleButton: Array<any>} = {defaultOptions: [], titleButton: []};
  constructor(private registerAuth: RegisterAuthService){};
  ngOnInit(): void {
    
    this.formRegister = new FormGroup(
      {
        firstName: new FormControl('',[
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12)
        ]),
        lastName: new FormControl('',[
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12)
        ]),
        phone: new FormControl('',[
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(15),
          Validators.pattern('^[0-9]*$')
        ]),
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]),
        terms: new FormControl(
          false, 
          Validators.requiredTrue)
      }
    )
    this.mainMenu.defaultOptions = [
      {
        name: 'Primer Nombre',
        for: 'firstName',
        type: 'text',
        help: 'firstNameHelp'
      },
      {
        name: 'Apellido',
        for: 'lastName',
        type: 'text',
        help: 'lastNameHelp'
      },
      {
        name: 'Teléfono',
        for: 'phone',
        type: 'tel',
        help: 'phoneHelp'
      },
      {
        name: 'Correo Electrónico',
        for: 'email',
        type: 'email',
        help: 'emailHelp'
      },
      {
        name: 'Contraseña',
        for: 'password',
        type: 'password',
        help: ''
      },
      
    ]
    this.mainMenu.titleButton = [
      {
        name: 'Registrate'
      },
      {
        name: 'Enviar',
        style: 'btn btn-primary w-100'
      },
      {
        name: 'Acepto los términos y condiciones'
      }
    ];
  }

  sendRegister(): void{
    const {firstName, lastName, phone, email, password} = this.formRegister.value;

    this.registerAuth.sendRegistrationCredentials(firstName, lastName, phone, email, password)
    .subscribe(response =>{
      console.log('Registro completado con exito ', response);
    }, error =>{
      this.errorRegister = true;
      console.log('Error al iniciar sesion', error);
    })
  }

  getErrorMessage(formControlName: string): string {
    const control = this.formRegister.get(formControlName);
    
    if (control?.errors?.['required']) {
      return 'Este campo es obligatorio.';
    } else if (control?.errors?.['email']) {
      return 'Por favor, introduce una dirección de correo electrónico válida.';
    } else if (control?.errors?.['minlength']) {
      return `Longitud mínima esperada ${control.errors['minlength'].requiredLength}.`;
    } else if (control?.errors?.['maxlength']) {
      return `Longitud máxima esperada ${control.errors['maxlength'].requiredLength}.`;
    } else if (control?.errors?.['pattern']) {
      return `Por favor, introduce solo números.`;
    }
  
    return ''; 
  }
  
  


}
