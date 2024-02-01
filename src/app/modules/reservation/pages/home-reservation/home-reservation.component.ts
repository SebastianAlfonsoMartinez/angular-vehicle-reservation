import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { ReservationService } from '@modules/reservation/services/reservation.service';
import { VehicleService } from '@modules/vehicle/services/vehicle.service';
import { VehicleModel } from '@core/models/vehicle.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-reservation',
  templateUrl: './home-reservation.component.html',
  styleUrls: ['./home-reservation.component.css']
})
export class HomeReservationComponent implements OnInit {
  vehicleId: string;
  userId: string;
  vehicle: VehicleModel | null;
  reservationForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private reservationService: ReservationService,
    private vehicleService: VehicleService,
    private datePipe: DatePipe
  ) {
    this.vehicleId = '';
    this.userId = '';
    this.vehicle = null;
    this.reservationForm = new FormGroup({
      startDateControl: new FormControl('', Validators.required),
      startTimeControl: new FormControl('', Validators.required),
      endDateControl: new FormControl('', Validators.required),
      endTimeControl: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.vehicleId = this.route.snapshot.paramMap.get('vehicleId') || '';
    this.userId = this.authService.getUserIdFromToken() || '';
    this.loadVehicleData();
  }

  submitReservation() {
    const startDateValue = this.reservationForm.get('startDateControl')?.value;
    const endDateValue = this.reservationForm.get('endDateControl')?.value;
    const startTimeValue = this.reservationForm.get('startTimeControl')?.value;
    const endTimeValue = this.reservationForm.get('endTimeControl')?.value;

    if (this.reservationForm.valid) {
      const formattedStartDate = this.datePipe.transform(startDateValue, 'yyyy-MM-dd') + `T${startTimeValue}:00`;
      const formattedEndDate = this.datePipe.transform(endDateValue, 'yyyy-MM-dd') + `T${endTimeValue}:00`;

      this.reservationService.sendReservationDate(formattedStartDate, formattedEndDate, +this.vehicleId, +this.userId)
        .subscribe({
          next: (response) => {
            console.log('Reserva realizada con éxito', response);
          },
          error: (error) => {
            console.error('Error al realizar la reserva', error);
          }
        });
    } else {
      console.error('El formulario no es válido');
    }
  }

  loadVehicleData(): void {
    if (this.vehicleId) {
      this.vehicleService.getVehicleById(this.vehicleId).subscribe({
        next: (data) => {
          this.vehicle = data;
        },
        error: (error) => {
          console.error('Error al cargar datos del vehículo', error);
        }
      });
    }
  }
}
