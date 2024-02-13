import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HomeReservationComponent } from './home-reservation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationService } from './services/reservation.service';
import { convertToParamMap } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('HomeReservationComponent', () => {
  let mockService = jasmine.createSpyObj('MockService', ['get']);
  let component: HomeReservationComponent;
  let fixture: ComponentFixture<HomeReservationComponent>;

  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: convertToParamMap({ 'paramKey': 'paramValue' }),
        queryParamMap: convertToParamMap({})
      }
    };

    await TestBed.configureTestingModule({
      declarations: [ HomeReservationComponent ],
      imports:[
        HttpClientTestingModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: ReservationService, useValue: mockService },
        DatePipe
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
