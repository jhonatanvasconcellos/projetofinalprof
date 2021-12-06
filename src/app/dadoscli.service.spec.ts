import { TestBed } from '@angular/core/testing';

import { DadoscliService } from './dadoscli.service';

describe('DadoscliService', () => {
  let service: DadoscliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadoscliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
