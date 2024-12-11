import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementVisualizerComponent } from './element-visualizer.component';

describe('ElementVisualizerComponent', () => {
  let component: ElementVisualizerComponent;
  let fixture: ComponentFixture<ElementVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementVisualizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
