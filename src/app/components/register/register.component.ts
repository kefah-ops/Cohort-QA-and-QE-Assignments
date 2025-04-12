// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class RegisterComponent {
  
  constructor(private router: Router) { }
  
  navigateToSignIn(): void {
    this.router.navigate(['/sign-in']);
  }
  
  // navigateToRecruiters(): void {
  //   this.router.navigate(['/sign-up']);
  // }
}