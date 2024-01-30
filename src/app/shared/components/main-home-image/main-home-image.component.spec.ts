import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeImageComponent } from './main-home-image.component';

describe('MainHomeImageComponent', () => {
  let component: MainHomeImageComponent;
  let fixture: ComponentFixture<MainHomeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
