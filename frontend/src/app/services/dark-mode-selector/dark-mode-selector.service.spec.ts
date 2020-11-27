import { TestBed } from '@angular/core/testing';

import { DarkModeSelectorService } from './dark-mode-selector.service';

describe('DarkModeSelectorService', () => {
  let service: DarkModeSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkModeSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
