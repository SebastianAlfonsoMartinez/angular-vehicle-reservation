import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeCardComponent } from './main-home-card.component';

describe('MainHomeCardComponent', () => {
  let component: MainHomeCardComponent;
  let fixture: ComponentFixture<MainHomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
