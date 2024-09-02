import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from '../../services/loan.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-loan-input',
  templateUrl: './loan-input.component.html',
  styleUrls: ['./loan-input.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ]
})
export class LoanInputComponent {
  loanAmount: number = 0;
  annualInterestRate: number = 0;
  loanTerm: number = 0;
  startDate: Date | null = null;

  constructor(private loanService: LoanService, private router: Router) {}

  calculateAmortization() {
    const schedule = this.loanService.generateAmortizationSchedule(
      this.loanAmount,
      this.annualInterestRate,
      this.loanTerm
    );
    // Navigate to the amortization table route with the schedule data
    this.router.navigate(['/amortization-table'], { state: { schedule } });
  }
}
