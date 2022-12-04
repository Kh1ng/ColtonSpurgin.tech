import { TestBed } from '@angular/core/testing';

import { TheRearService } from './the-rear.service';

describe('TheRearService', () => {
  let service: TheRearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheRearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
