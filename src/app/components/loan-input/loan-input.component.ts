import { Component } from '@angular/core';
import { LoanService } from '../../services/loan.service';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerToggleModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    MatDatepickerModule,
    // MatDatepickerToggleModule
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
    // Pass the schedule to another component via a service or route parameters
    this.router.navigate(['/schedule'], { state: { schedule } });
  }
}
