import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CardServicesService } from './card-services.service';

describe('CardServicesService', () => {
  let service: CardServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CardServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
