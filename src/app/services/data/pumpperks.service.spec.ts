import { TestBed } from '@angular/core/testing';

import { PumpperksService } from './pumpperks.service';

describe('PumpperksService', () => {
  let service: PumpperksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PumpperksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
