import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet if using routing

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet] // Import RouterOutlet if using routing
})
export class AppComponent {
  // Component logic here
}
