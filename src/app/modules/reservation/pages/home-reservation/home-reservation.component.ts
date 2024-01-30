import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '@modules/reservation/services/reservation.service';

@Component({
  selector: 'app-home-reservation',
  templateUrl: './home-reservation.component.html',
  styleUrls: ['./home-reservation.component.css']
})
export class HomeReservationComponent implements OnInit{
  errorReservation = true;
  formReservation: FormGroup = new FormGroup({});

  constructor(private reservationService: ReservationService){};
  ngOnInit(): void {
    this.formReservation = new FormGroup({
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)
    });
  }



  onSubmit() {
    if (this.formReservation.valid) {
      // Procesar la reserva aquí
      console.log(this.formReservation.value);
    }
  }

  sendBooking(): void{
    const {startDate, endDate, vehicle, user} = this.formReservation.value;

    this.reservationService.sendeReservation(startDate, endDate, vehicle, user)
    .subscribe(response =>{
      console.log("reserva creada con exito", response);
    },error =>{
      this.errorReservation=true;
      console.log('error al crear reserva ', error);
      
    })
  }
}
