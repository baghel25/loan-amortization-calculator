// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanInputComponent } from './components/loan-input/loan-input.component';
import { AmortizationTableComponent } from './components/amortization-table/amortization-table.component';
import { AmortizationResolver } from './services/amortization-resolver.service';

const routes: Routes = [
  { path: 'loan-input', component: LoanInputComponent },
  { path: 'amortization-table', component: AmortizationTableComponent, resolve: { scheduleData: AmortizationResolver } },
  { path: '', redirectTo: 'loan-input', pathMatch: 'full' },
  { path: '**', redirectTo: 'loan-input' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
