import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationAlertComponent } from './medication-alert.component';

describe('MedicationAlertComponent', () => {
  let component: MedicationAlertComponent;
  let fixture: ComponentFixture<MedicationAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
