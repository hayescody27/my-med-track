import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medication-details',
  templateUrl: './medication-details.component.html',
  styleUrls: ['./medication-details.component.scss']
})
export class MedicationDetailsComponent implements OnInit {

  displayedColumns: string[] = ['edit', 'weekdays', 'time', 'enabled'];
  dataSource = [
    { weekdays: 'All', time: '7am', enabled: true },
    { weekdays: 'All', time: '7am', enabled: true },
    { weekdays: 'All', time: '7am', enabled: true },
    { weekdays: 'All', time: '7am', enabled: true },
    { weekdays: 'All', time: '7am', enabled: true },
  ];
  refillFrequencies = ['Days', 'Weeks', 'Months', 'Years']
  medicationDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.medicationDetailsForm = this.fb.group({
      name: ['', Validators.required],
      dosage: ['', Validators.required],
      specialInstructions: ['', Validators.maxLength(250)],
      refillFrequency: ['', Validators.required],
      refillFreqUom: ['Days', Validators.required]
    });
  }

}
