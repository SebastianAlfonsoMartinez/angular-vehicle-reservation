import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsComponent;
  let fixture: ComponentFixture<VehicleDetailsComponent>;

  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => '1', // Simula la obtención de un ID de la ruta, por ejemplo
        },
      },
    }
    await TestBed.configureTestingModule({
      declarations: [VehicleDetailsComponent],
      imports:[
        HttpClientTestingModule
      ],
      providers: [
        // Provee el stub creado como valor para ActivatedRoute
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
