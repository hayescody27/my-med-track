import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medication-alert',
  templateUrl: './medication-alert.component.html',
  styleUrls: ['./medication-alert.component.scss']
})
export class MedicationAlertComponent implements OnInit {

  medicationAlertForm: FormGroup;
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  period = ['AM', 'PM']

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.medicationAlertForm = this.fb.group({
      name: [{ value: 'Ibuprofen', disabled: true }],
      weekdays: ['', Validators.required],
      hours: ['12', Validators.required],
      minutes: ['00', Validators.required],
      period: ['PM', Validators.required],
      enabled: [true, Validators.required]
    });
  }
}
