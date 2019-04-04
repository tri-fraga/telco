import { TestBed } from '@angular/core/testing';

import { InMemoryLocationService } from './in-memory-location.service';

describe('InMemoryLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryLocationService = TestBed.get(InMemoryLocationService);
    expect(service).toBeTruthy();
  });
});
