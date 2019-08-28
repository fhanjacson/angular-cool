import { TestBed } from '@angular/core/testing';

import { CatpictureService } from './catpicture.service';

describe('CatpictureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatpictureService = TestBed.get(CatpictureService);
    expect(service).toBeTruthy();
  });
});
