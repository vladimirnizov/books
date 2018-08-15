import { TestBed, inject } from '@angular/core/testing';

import { ExistService } from './exist.service';

describe('ExistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExistService]
    });
  });

  it('should be created', inject([ExistService], (service: ExistService) => {
    expect(service).toBeTruthy();
  }));
});
