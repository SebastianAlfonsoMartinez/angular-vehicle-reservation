import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSliderComponent } from './vehicle-slider.component';

describe('VehicleSliderComponent', () => {
  let component: VehicleSliderComponent;
  let fixture: ComponentFixture<VehicleSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
