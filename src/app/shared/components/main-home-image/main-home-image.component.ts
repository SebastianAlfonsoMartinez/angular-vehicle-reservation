import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {City} from '@core/models/city.model'
import cityJson from '@data/dataCity.json'

@Component({
  selector: 'app-main-home-image',
  templateUrl: './main-home-image.component.html',
  styleUrls: ['./main-home-image.component.css']
})
export class MainHomeImageComponent implements OnInit {
  activeSlideIndex = 0;
  slides: City[] = cityJson;

  constructor() {}

  ngOnInit(): void {
  }


  moveSlide(direction: number): void {
    this.activeSlideIndex += direction;
    if (this.activeSlideIndex >= this.slides.length) {
      this.activeSlideIndex = 0;
    } else if (this.activeSlideIndex < 0) {
      this.activeSlideIndex = this.slides.length - 1;
    }
  }

}
