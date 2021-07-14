import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
