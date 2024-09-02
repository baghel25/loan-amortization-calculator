import { ChartData } from 'chart.js'; // Import ChartData

// export interface Payment {
//   principal: number;
//   interest: number;
//   total: number;
//   remainingBalance: number;
// }

// Define the LoanState interface
export interface LoanState {
    chartData: ChartData<'line'>;
    payments: Payment[];
  }
export interface Payment {
    number: number;
    principal: number;
    interest: number;
    total: number;
    balance: number;
    remainingBalance: number; // Ensure this property is included
}
  
  
  // Other state interfaces and types
  