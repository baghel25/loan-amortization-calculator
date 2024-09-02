import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanInputComponent } from './app/components/loan-input/loan-input.component';
import { AmortizationTableComponent } from './app/components/amortization-table/amortization-table.component';
import { AmortizationChartComponent } from './app/components/amortization-chart/amortization-chart.component';

const routes: Routes = [
  { path: 'loan-input', component: LoanInputComponent },
  { path: 'amortization-table', component: AmortizationTableComponent },
  { path: 'amortization-chart', component: AmortizationChartComponent },
  { path: 'schedule', component: AmortizationTableComponent },
  { path: '', redirectTo: 'loan-input', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes),
      MatNativeDateModule,
      BrowserAnimationsModule 
    )
  ]
})
.catch(err => console.error(err));
