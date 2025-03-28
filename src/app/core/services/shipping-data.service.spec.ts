import { TestBed } from '@angular/core/testing';

import { ShippingDataService } from './shipping-data.service';

describe('ShippingDataService', () => {
  let service: ShippingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
