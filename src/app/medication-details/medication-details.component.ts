import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  showBackButton: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => this.showBackButton = params.from === 'list');
  }

  ngOnInit(): void {
    this.medicationDetailsForm = this.fb.group({
      name: ['', Validators.required],
      dosage: ['', Validators.required],
      specialInstructions: ['', Validators.maxLength(250)],
      refillFrequency: ['', Validators.required],
      refillFreqUom: ['Days', Validators.required]
    });
  }

  backToList() {
    this.router.navigate(['/medication-list'], { queryParams: { from: 'details' } });
  }

}
