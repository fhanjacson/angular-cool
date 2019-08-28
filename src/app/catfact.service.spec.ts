import { TestBed } from '@angular/core/testing';

import { CatfactService } from './catfact.service';

describe('CatfactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatfactService = TestBed.get(CatfactService);
    expect(service).toBeTruthy();
  });
});
