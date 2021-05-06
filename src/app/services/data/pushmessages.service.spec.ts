import { TestBed } from '@angular/core/testing';

import { PushmessagesService } from './pushmessages.service';

describe('PushmessagesService', () => {
  let service: PushmessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PushmessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
