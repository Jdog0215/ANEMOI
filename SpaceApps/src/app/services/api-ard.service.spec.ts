import { TestBed } from '@angular/core/testing';

import { ApiArdService } from './api-ard.service';

describe('ApiArdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiArdService = TestBed.get(ApiArdService);
    expect(service).toBeTruthy();
  });
});
