import { Component } from '@angular/core';
import { VehicleModel } from 'src/app/core/models/vehicle.model';
import { CardServicesService } from './services/card-services.service';


@Component({
  selector: 'app-main-home-card',
  templateUrl: './main-home-card.component.html',
  styleUrls: ['./main-home-card.component.css']
})

export class MainHomeCardComponent {
  vehicles: Array<any> = [];

  constructor(private cardService: CardServicesService){}
  ngOnInit() {
    this.cardService.getAllVehicles$().subscribe((response: VehicleModel[]) => {
      this.vehicles = this.shuffleVehicles(response);
      console.log('Vehicles shuffled and loaded: ', this.vehicles);
    });
  }

  shuffleVehicles(vehicles: VehicleModel[]): VehicleModel[] {
    let array = [...vehicles]; 
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
