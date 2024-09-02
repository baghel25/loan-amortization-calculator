import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule, // Import RouterModule for routing
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class AppComponent {
  // Component logic here
}
