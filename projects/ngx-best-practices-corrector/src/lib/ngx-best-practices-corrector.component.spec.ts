import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBestPracticesCorrectorComponent } from './ngx-best-practices-corrector.component';

describe('NgxBestPracticesCorrectorComponent', () => {
  let component: NgxBestPracticesCorrectorComponent;
  let fixture: ComponentFixture<NgxBestPracticesCorrectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxBestPracticesCorrectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxBestPracticesCorrectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
