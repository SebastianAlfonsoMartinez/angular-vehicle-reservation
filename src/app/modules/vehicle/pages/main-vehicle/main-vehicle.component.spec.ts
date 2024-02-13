import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MainVehicleComponent } from './main-vehicle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MainVehicleComponent', () => {
  let component: MainVehicleComponent;
  let fixture: ComponentFixture<MainVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainVehicleComponent ],
      imports:[
        HttpClientTestingModule,
        MatPaginatorModule,
        BrowserAnimationsModule
      ]
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
