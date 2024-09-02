import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule

@Component({
  selector: 'app-amortization-table',
  templateUrl: './amortization-table.component.html',
  styleUrls: ['./amortization-table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule // Include MatTableModule here
  ]
})
export class AmortizationTableComponent implements OnInit {
  displayedColumns: string[] = ['month', 'payment', 'interest', 'principalPayment', 'balance'];
  dataSource = new MatTableDataSource<any>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the state passed from the previous component
    const schedule = history.state.schedule;
    if (schedule) {
      this.dataSource.data = schedule;
    }
  }
}
