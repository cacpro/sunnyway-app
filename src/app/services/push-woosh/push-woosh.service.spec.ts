import { TestBed } from '@angular/core/testing';

import { PushWooshService } from './push-woosh.service';

describe('PushWooshService', () => {
  let service: PushWooshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PushWooshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
