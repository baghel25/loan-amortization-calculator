import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanInputComponent } from './components/loan-input/loan-input.component';
import { AmortizationTableComponent } from './components/amortization-table/amortization-table.component';

const routes: Routes = [
  { path: '', component: LoanInputComponent },
  { path: 'schedule', component: AmortizationTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
