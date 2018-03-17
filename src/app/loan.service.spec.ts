import { TestBed, inject } from '@angular/core/testing';

import { LoanService } from './loan.service';

describe('LoanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanService]
    });
  });

  it('should be created', inject([LoanService], (service: LoanService) => {
    expect(service).toBeTruthy();
  }));
});
