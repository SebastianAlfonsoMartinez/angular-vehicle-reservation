import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  fullName?: string;
  initials?: string;
  private userInfoSubscription?: Subscription;
  
  mainMenu: {
    defaulOptions: Array<any>, accessLink: Array<any>
  } = {defaulOptions: [], accessLink: []
  };
  customOptions: Array<any> = [];

  constructor(private authService: AuthService){}
  
  
  
  ngOnInit(): void {

    this.authService.userInfo$.subscribe(userInfo => {
      this.isLoggedIn = !!userInfo;
      if (userInfo) {
        this.fullName = `${userInfo.firstName} ${userInfo.lastName}`;
        // Extrae las iniciales del nombre completo
        this.initials = `${userInfo.firstName[0]}${userInfo.lastName[0]}`;
      } else {
        this.fullName = undefined;
        this.initials = undefined;
      }
    });
    
    
    this.mainMenu.defaulOptions = [
      {name: 'Reservas', router: ['/home/reservation/list']},
      {name: 'Vehiculos', router: ['/home/vehicle/main']},
      {name: 'Lugares', router: ['/', 'sites']},
      {name: 'Home', router: ['/home/main']
      }
    ]
    this.mainMenu.accessLink = [
      {name: 'Iniciar Sesión', router: ['/', 'auth', '/', 'login'], style: 'btn login'},
      {name: 'Registrarse', router: ['/auth/register'], style: 'btn register'},
    ]
  }
  logout(): void {
    this.authService.logout();
  }
  ngOnDestroy(): void {
    this.userInfoSubscription?.unsubscribe();
  }
}
