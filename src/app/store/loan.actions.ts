import { createAction, props } from '@ngrx/store';
import { ChartData } from 'chart.js'; // Import ChartData from chart.js

export const calculateLoan = createAction(
  '[Loan] Calculate Loan',
  props<{ loanData: any }>()
);

export const loadAmortizationSchedule = createAction(
  '[Loan] Load Amortization Schedule',
  props<{ chartData: ChartData<'line'> }>() // Updated to match ChartData
);

export interface Payment {
  principal: number;
  interest: number;
  total: number;
  remainingBalance: number;
}
