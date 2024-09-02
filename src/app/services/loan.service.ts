// loan.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  calculateMonthlyPayment(principal: number, annualRate: number, termYears: number): number {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = termYears * 12;
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  }

  generateAmortizationSchedule(principal: number, annualRate: number, termYears: number): any[] {
    const monthlyPayment = this.calculateMonthlyPayment(principal, annualRate, termYears);
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = termYears * 12;
    const schedule = [];
    let balance = principal;
    for (let i = 1; i <= numberOfPayments; i++) {
      const interest = balance * monthlyRate;
      const principalPayment = monthlyPayment - interest;
      balance -= principalPayment;
      schedule.push({
        month: i,
        payment: monthlyPayment,
        interest,
        principalPayment,
        balance: Math.max(balance, 0)
      });
    }
    return schedule;
  }
}
