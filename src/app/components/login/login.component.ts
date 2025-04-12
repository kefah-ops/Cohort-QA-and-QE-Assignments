// components/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    
    // Simulate API call
    setTimeout(() => {
      // Placeholder for actual authentication logic
      console.log('Login attempt:', this.loginForm.value);
      
      // For demo purposes, always show success
      // In a real app, you would verify credentials and handle errors
      this.isSubmitting = false;
    }, 1000);
  }

  // Helper methods for form validation
  hasError(controlName: string, errorName: string): boolean {
    const control = this.loginForm.get(controlName);
    return !!control?.touched && !!control?.hasError(errorName);
  }
}