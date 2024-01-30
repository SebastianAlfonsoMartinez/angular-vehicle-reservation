import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-slider',
  templateUrl: './vehicle-slider.component.html',
  styleUrls: ['./vehicle-slider.component.css']
})
export class VehicleSliderComponent {
  slides = [
    {
      imgUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_a750e3d2e9f3442980ec51da74185f8d.webp',
      title: 'Grupo C - Económico Con Aire Mecánico',
      description: 'Vehículo similar a: Kia Picanto 1.0, Fiat Mobi 1.0, Suzuki S-Presso 1.0, entre otros.'
    },
    {
      imgUrl: 'https://autozen.com.co/Suzuki/imageslider/Suzuki-SEDAN-GL-Azul.webp',
      title: 'Grupo F - Intermedio Mecánico',
      description: 'Vehículo similar a: Suzuki Swift Dire 1.2, Renault Logan 1.6, Gol Trendline 1.6, entre otros.'
    },
    {
      imgUrl: 'https://www.staging.carone.com.ar/wp-content/uploads/2021/09/vw-gol-2021.png',
      title: 'Grupo FL - Libre De Pico Y Placa',
      description: 'Vehículo similar a: Suzuki Swift Híbrido Mecánico, entre otros.'
    },

  ];
  activeSlideIndex = 0;

  moveSlide(direction: number): void {
    this.activeSlideIndex += direction;
    if (this.activeSlideIndex >= this.slides.length) {
      this.activeSlideIndex = 0;
    } else if (this.activeSlideIndex < 0) {
      this.activeSlideIndex = this.slides.length - 1;
    }
  }
}
