// components/signup/signup.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule]
})
export class SigninComponent implements OnInit {
  signupForm: FormGroup;
  isSubmitting = false;
  signupError = '';
  accountType: 'jobseeker' | 'recruiter' = 'jobseeker';
  step = 1;
  maxSteps = 3;
  passwordVisible = false;
  confirmPasswordVisible = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      // Step 1
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      
      // Step 2
      password: ['', [
        Validators.required, 
        Validators.minLength(8),
        this.createPasswordStrengthValidator()
      ]],
      confirmPassword: ['', Validators.required],
      
      // Step 3
      accountType: ['jobseeker', Validators.required],
      companyName: [''],
      jobTitle: [''],
      experience: [''],
      termsAccepted: [false, Validators.requiredTrue]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit() {
    // Update form validation based on account type
    this.signupForm.get('accountType')?.valueChanges.subscribe(value => {
      this.accountType = value;
      const companyNameControl = this.signupForm.get('companyName');
      
      if (value === 'recruiter') {
        companyNameControl?.setValidators([Validators.required]);
      } else {
        companyNameControl?.clearValidators();
      }
      
      companyNameControl?.updateValueAndValidity();
    });
  }

  nextStep() {
    if (this.step === 1) {
      const step1Controls = ['firstName', 'lastName', 'email'];
      if (this.checkStepValidity(step1Controls)) {
        this.step++;
      }
    } else if (this.step === 2) {
      const step2Controls = ['password', 'confirmPassword'];
      if (this.checkStepValidity(step2Controls)) {
        this.step++;
      }
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  checkStepValidity(controlNames: string[]): boolean {
    let isValid = true;
    
    for (const name of controlNames) {
      const control = this.signupForm.get(name);
      if (control?.invalid) {
        control.markAsTouched();
        isValid = false;
      }
    }
    
    return isValid;
  }

  createPasswordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const value = control.value;
      
      if (!value) {
        return null;
      }
      
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
      
      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar;
      
      return !passwordValid ? {passwordStrength: true} : null;
    };
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({passwordMismatch: true});
      return {passwordMismatch: true};
    } else {
      return null;
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.signupError = '';

    // Simulate registration process
    setTimeout(() => {
      console.log('Registration submitted:', this.signupForm.value);
      this.isSubmitting = false;
      
      // Typically you would make an API call to register the user
      // For demo - redirect to the appropriate dashboard based on account type
      const accountType = this.signupForm.value.accountType;
      console.log(`Registration successful - redirect to ${accountType} dashboard`);
    }, 1500);
  }

  // Helper method for template
  hasError(controlName: string, errorName: string): boolean {
    const control = this.signupForm.get(controlName);
    return !!control && control.touched && control.hasError(errorName);
  }

  // Calculate password strength for progress bar
  getPasswordStrength(): number {
    const password = this.signupForm.get('password')?.value || '';
    if (!password) return 0;
    
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 25;
    
    // Character type checks
    if (/[A-Z]+/.test(password)) strength += 25;
    if (/[a-z]+/.test(password)) strength += 25;
    if (/[0-9]+/.test(password)) strength += 12.5;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) strength += 12.5;
    
    return Math.min(strength, 100);
  }

  getPasswordStrengthLabel(): string {
    const strength = this.getPasswordStrength();
    if (strength < 25) return 'Weak';
    if (strength < 50) return 'Fair';
    if (strength < 75) return 'Good';
    return 'Strong';
  }

  getPasswordStrengthClass(): string {
    const strength = this.getPasswordStrength();
    if (strength < 25) return 'weak';
    if (strength < 50) return 'fair';
    if (strength < 75) return 'good';
    return 'strong';
  }
}