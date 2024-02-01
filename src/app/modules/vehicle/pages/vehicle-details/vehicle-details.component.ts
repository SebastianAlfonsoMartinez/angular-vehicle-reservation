import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleModel } from '@core/models/vehicle.model';
import { VehicleService } from '@modules/vehicle/services/vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  @Input() vehicle?: VehicleModel;

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService) { }

  ngOnInit(): void {
    const vehicleId = this.route.snapshot.paramMap.get('id');
    if (vehicleId) {
      this.vehicleService.getVehicleById(vehicleId).subscribe((vehicle) => {
        this.vehicle = vehicle;
      });
    }
  }
}
