// amortization-resolver.service.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { LoanService } from './loan.service';

@Injectable({
  providedIn: 'root'
})
export class AmortizationResolver implements Resolve<any> {
  constructor(private loanService: LoanService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const { loanAmount, annualInterestRate, loanTerm } = history.state;
    return this.loanService.generateAmortizationSchedule(loanAmount, annualInterestRate, loanTerm);
  }
}
