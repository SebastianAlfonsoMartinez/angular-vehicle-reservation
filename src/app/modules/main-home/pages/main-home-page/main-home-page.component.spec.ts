import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MainHomePageComponent } from './main-home-page.component';
import { SharedModule } from '@shared/shared.module';

describe('MainHomePageComponent', () => {
  let component: MainHomePageComponent;
  let fixture: ComponentFixture<MainHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomePageComponent ],
      imports:[
        SharedModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
