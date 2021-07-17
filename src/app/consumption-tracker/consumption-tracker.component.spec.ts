import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionTrackerComponent } from './consumption-tracker.component';

describe('ConsumptionTrackerComponent', () => {
  let component: ConsumptionTrackerComponent;
  let fixture: ComponentFixture<ConsumptionTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumptionTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
