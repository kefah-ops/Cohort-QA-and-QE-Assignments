import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations'; // If you're using animations

// enableProdMode(); // Uncomment for production

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations() // Optional, only if you're using Angular animations
  ]
}).catch(err => console.error(err));
