import { TestBed } from '@angular/core/testing';

import { NgxDomVisualizerService } from './ngx-dom-visualizer.service';

describe('NgxDomVisualizerService', () => {
  let service: NgxDomVisualizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDomVisualizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
