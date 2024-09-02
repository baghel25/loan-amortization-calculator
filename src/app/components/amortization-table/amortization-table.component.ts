import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for pipes like currency
import { MatTableModule } from '@angular/material/table'; // Import Angular Material Table module
import { MatSortModule } from '@angular/material/sort'; // Import Angular Material Sort module
import { MatPaginatorModule } from '@angular/material/paginator'; // Import Angular Material Paginator module

@Component({
  selector: 'app-amortization-table',
  templateUrl: './amortization-table.component.html',
  styleUrls: ['./amortization-table.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Add CommonModule for built-in Angular pipes
    MatTableModule, // Add Angular Material Table module
    MatSortModule, // Add Angular Material Sort module if needed
    MatPaginatorModule // Add Angular Material Paginator module if needed
  ]
})
export class AmortizationTableComponent implements OnInit {
  schedule: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      const state = navigation.extras.state as any;
      if (state.schedule) {
        this.schedule = state.schedule;
      }
    }
  }
}
