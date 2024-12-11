import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDomVisualizerComponent } from './ngx-dom-visualizer.component';

describe('NgxDomVisualizerComponent', () => {
  let component: NgxDomVisualizerComponent;
  let fixture: ComponentFixture<NgxDomVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDomVisualizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDomVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
