import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumption-tracker',
  templateUrl: './consumption-tracker.component.html',
  styleUrls: ['./consumption-tracker.component.scss']
})
export class ConsumptionTrackerComponent {

  currentDate: Date = new Date();
  data = [
    { medicationName: 'Simvastatin', dueAt: '7:00 AM', status: 'Taken' },
    { medicationName: 'Lisinopril', dueAt: '12:00 PM', status: 'Overdue' },
    { medicationName: 'Levothyroxine', dueAt: '7:00 PM', status: 'Upcoming' },
    { medicationName: 'Azithromycin', dueAt: '7:00 PM', status: 'Upcoming' },
    { medicationName: 'Metformin', dueAt: '9:00 PM', status: 'Upcoming' },
  ];


  subtractDay() {
    this.currentDate = new Date(new Date(this.currentDate).setDate(this.currentDate.getDate() - 1))
  }

  addDay() {
    this.currentDate = new Date(new Date(this.currentDate).setDate(this.currentDate.getDate() + 1))
  }

}
