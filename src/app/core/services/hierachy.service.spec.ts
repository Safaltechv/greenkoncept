import { TestBed } from '@angular/core/testing';

import { HierachyService } from './hierachy.service';

describe('HierachyService', () => {
  let service: HierachyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HierachyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
