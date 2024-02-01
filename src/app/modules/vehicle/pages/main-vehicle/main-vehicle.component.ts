import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { VehicleModel } from '@core/models/vehicle.model';
import { CardServicesService } from '@shared/components/main-home-card/services/card-services.service';

@Component({
  selector: 'app-main-vehicle',
  templateUrl: './main-vehicle.component.html',
  styleUrls: ['./main-vehicle.component.css']
})
export class MainVehicleComponent implements OnInit {
  allVehicles: VehicleModel[] = [];
  displayedVehicles: VehicleModel[] = [];
  totalVehicles = 0; 
  pageSize = 3; 
  currentPage = 0;

  constructor(private cardService: CardServicesService) {}

  ngOnInit() {
    this.loadVehicles();
  }

  loadVehicles() {
    this.cardService.getAllVehiclesForShuffle$().subscribe(response => {
      this.allVehicles = response;
      this.totalVehicles = response.length;
      this.updateDisplayedVehicles();
    });
  }

  updateDisplayedVehicles() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.displayedVehicles = this.allVehicles.slice(start, end);
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedVehicles();
  }
}
