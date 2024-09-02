import { createSelector } from '@ngrx/store';

export const selectPayments = createSelector(
  (state: any) => state.loan,
  (loanState: any) => loanState.payments
);

export const selectChartData = createSelector(
  (state: any) => state.loan,
  (loanState: any) => loanState.chartData
);
