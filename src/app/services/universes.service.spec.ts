import { TestBed } from '@angular/core/testing';

import { UniversesService } from './universes.service';

describe('UniversesService', () => {
  let service: UniversesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
