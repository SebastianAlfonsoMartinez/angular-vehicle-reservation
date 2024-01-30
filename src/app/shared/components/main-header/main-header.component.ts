import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  fullName?: string;
  private userInfoSubscription?: Subscription;
  
  mainMenu: {
    defaulOptions: Array<any>, accessLink: Array<any>
  } = {defaulOptions: [], accessLink: []
  };
  customOptions: Array<any> = [];

  constructor(private router: Router, private authService: AuthService){}
  
  
  
  ngOnInit(): void {
    this.userInfoSubscription = this.authService.userInfo$.subscribe(userInfo => {
      this.fullName = userInfo.fullName;
    });
    
    this.authService.getTokenClaims();
    
    this.mainMenu.defaulOptions = [
      {
        name: 'Reservas',
        router: ['/home/reservation']
      },
      {
        name: 'Vehiculos',
        router: ['/home/vehicle/main']
      },
      {
        name: 'Lugares',
        router: ['/', 'sites']
      },
      {
        name: 'Home',
        router: ['/home/main']
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Iniciar Sesión',
        router: ['/', 'auth', '/', 'login'],
        style: 'btn login'

      },
      {
        name: 'Registrarse',
        router: ['/auth/register'],
        style: 'btn register'
      },
    ]
  }

  ngOnDestroy(): void {
    this.userInfoSubscription?.unsubscribe();
  }
}
