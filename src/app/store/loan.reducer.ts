import { createReducer, on } from '@ngrx/store';
import { loadAmortizationSchedule } from './loan.actions';
import { ChartData } from 'chart.js'; // Ensure ChartData is imported

export interface LoanState {
  chartData: ChartData<'line'>;
}

const initialState: LoanState = {
  chartData: {
    labels: [],
    datasets: []
  }
};

export const loanReducer = createReducer(
  initialState,
  on(loadAmortizationSchedule, (state, { chartData }) => ({
    ...state,
    chartData
  }))
);
