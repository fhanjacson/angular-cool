import { TestBed } from '@angular/core/testing';

import { YerkeeService } from './yerkee.service';

describe('YerkeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YerkeeService = TestBed.get(YerkeeService);
    expect(service).toBeTruthy();
  });
});
