import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes'; // Ensure you have your routes defined here

bootstrapApplication(AppComponent, {
  providers: [
    // Provide any global services or configurations here
  ],
  // RouterModule configuration needs to be included in the standalone component, not here
})
.catch(err => console.error(err));
