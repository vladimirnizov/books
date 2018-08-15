import { TestBed, inject } from '@angular/core/testing';

import { ChekService } from './chek.service';

describe('ChekService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChekService]
    });
  });

  it('should be created', inject([ChekService], (service: ChekService) => {
    expect(service).toBeTruthy();
  }));
});
