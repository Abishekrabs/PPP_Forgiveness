import { TestBed } from '@angular/core/testing';

import { ForgivenessService } from './forgiveness.service';

describe('ForgivenessService', () => {
  let service: ForgivenessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgivenessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
