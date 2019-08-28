import { TestBed } from '@angular/core/testing';

import { Ex3Service } from './ex3.service';

describe('Ex3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ex3Service = TestBed.get(Ex3Service);
    expect(service).toBeTruthy();
  });
});
