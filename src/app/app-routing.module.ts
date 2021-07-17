import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicationAlertComponent } from './medication-alert/medication-alert.component';
import { MedicationDetailsComponent } from './medication-details/medication-details.component';
import { MedicationListComponent } from './medication-list/medication-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'medication-details', component: MedicationDetailsComponent },
  { path: 'medication-alert', component: MedicationAlertComponent },
  { path: 'medication-list', component: MedicationListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
