import { TestBed } from '@angular/core/testing';

import { InMemoryDeviceService } from './in-memory-device.service';

describe('InMemoryDeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDeviceService = TestBed.get(InMemoryDeviceService);
    expect(service).toBeTruthy();
  });
});
