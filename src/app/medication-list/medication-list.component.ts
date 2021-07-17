import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.scss']
})
export class MedicationListComponent {

  constructor(private router: Router) {

  }

  displayedColumns: string[] = ['name', 'dosage', 'instructions', 'refillFreq', 'schedule', 'active'];
  dataSource = [
    { name: 'Simvastatin', dosage: '40mg', specialInstructions: 'With food', refillReq: 'Monthly', schedule: 'Twice daily', active: true },
    { name: 'Lisinopril', dosage: '20mg', specialInstructions: '', refillReq: 'Every 3 months', schedule: 'Once daily', active: true },
    { name: 'Levothyroxine', dosage: '15mg', specialInstructions: 'As needed', refillReq: 'Monthly', schedule: 'Weekly', active: true },
    { name: 'Azithromycin', dosage: '35mg', specialInstructions: '', refillReq: 'Monthly', schedule: 'Once daily', active: false },
    { name: 'Metformin', dosage: '50mg', specialInstructions: '', refillReq: '3 months', schedule: 'Twice daily', active: false },
  ];

  routeToDetails(event: MouseEvent): void {
    this.router.navigate(['/medication-details'], { queryParams: { from: 'list' } });
  }

}
