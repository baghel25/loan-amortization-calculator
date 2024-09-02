import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoanService } from '../services/loan.service';
import { calculateLoan, loadAmortizationSchedule } from './loan.actions';
import { switchMap } from 'rxjs/operators';
import { ChartData } from 'chart.js';
import { Payment } from './loan.state';
import { of } from 'rxjs';

@Injectable()
export class LoanEffects {

  calculateLoan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(calculateLoan),
      switchMap(({ loanData }) => {
        const payments: Payment[] = this.loanService.generateAmortizationSchedule(
          loanData.amount,
          loanData.interest,
          loanData.term,
          loanData.startDate ?? undefined 
        );

        const chartData: ChartData<'line'> = this.generateChartData(payments);

        return of(loadAmortizationSchedule({ chartData }));
      })
    )
  );

  constructor(
    private actions$: Actions,
    private loanService: LoanService
  ) {}

  private generateChartData(payments: Payment[]): ChartData<'line'> {
    // Example implementation of chart data generation
    return {
      labels: payments.map(payment => `Payment ${payment.number}`),
      datasets: [{
        label: 'Principal',
        data: payments.map(payment => payment.principal),
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: false,
      }, {
        label: 'Interest',
        data: payments.map(payment => payment.interest),
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        fill: false,
      }]
    };
  }
}
