import { TestBed } from '@angular/core/testing';

import { NgxBestPracticesCorrectorService } from './ngx-best-practices-corrector.service';

describe('NgxBestPracticesCorrectorService', () => {
  let service: NgxBestPracticesCorrectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBestPracticesCorrectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
