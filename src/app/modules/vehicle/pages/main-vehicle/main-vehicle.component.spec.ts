import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVehicleComponent } from './main-vehicle.component';

describe('MainVehicleComponent', () => {
  let component: MainVehicleComponent;
  let fixture: ComponentFixture<MainVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
