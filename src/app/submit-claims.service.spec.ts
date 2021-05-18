import { TestBed } from '@angular/core/testing';

import { SubmitClaimsService } from './submit-claims.service';

describe('SubmitClaimsService', () => {
  let service: SubmitClaimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitClaimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
