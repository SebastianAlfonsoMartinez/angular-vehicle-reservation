import { TestBed } from '@angular/core/testing';

import { RegisterAuthService } from './register-auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('RegisterAuthService', () => {
  let service: RegisterAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(RegisterAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
