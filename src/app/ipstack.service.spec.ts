import { TestBed } from '@angular/core/testing';

import { IpstackService } from './ipstack.service';

describe('IpstackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpstackService = TestBed.get(IpstackService);
    expect(service).toBeTruthy();
  });
});
