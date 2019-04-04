import { TestBed } from '@angular/core/testing';

import { InMemoryTelcoService } from './in-memory-telco.service';

describe('InMemoryTelcoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryTelcoService = TestBed.get(InMemoryTelcoService);
    expect(service).toBeTruthy();
  });
});
