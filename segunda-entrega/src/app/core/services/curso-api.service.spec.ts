import { TestBed } from '@angular/core/testing';

import { CursoApiService } from './curso-api.service';

describe('CursoApiService', () => {
  let service: CursoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
