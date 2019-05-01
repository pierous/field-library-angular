import { TestBed } from '@angular/core/testing';

import { FieldLibService } from './field-lib.service';

describe('FieldLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FieldLibService = TestBed.get(FieldLibService);
    expect(service).toBeTruthy();
  });
});
