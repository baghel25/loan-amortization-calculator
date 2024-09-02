import { Routes } from '@angular/router';
import { LoanInputComponent } from './components/loan-input/loan-input.component';
import { AmortizationTableComponent } from './components/amortization-table/amortization-table.component';

export const routes: Routes = [
  { path: '', component: LoanInputComponent },
  { path: 'schedule', component: AmortizationTableComponent }
];
