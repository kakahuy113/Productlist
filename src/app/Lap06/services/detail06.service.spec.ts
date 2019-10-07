import { TestBed } from '@angular/core/testing';

import { Detail06Service } from './detail06.service';

describe('Detail06Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Detail06Service = TestBed.get(Detail06Service);
    expect(service).toBeTruthy();
  });
});
