import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanInputComponent } from './components/loan-input/loan-input.component';
import { AmortizationTableComponent } from './components/amortization-table/amortization-table.component';
import { AmortizationChartComponent } from './components/amortization-chart/amortization-chart.component';
import { LoanService } from './services/loan.service';

@NgModule({
  declarations: [
    AppComponent,
    LoanInputComponent,
    AmortizationTableComponent,
    AmortizationChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // Import RouterModule here
    FormsModule
  ],
  providers: [LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
