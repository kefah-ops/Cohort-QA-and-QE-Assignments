import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apply-jobs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './apply-jobs.component.html',
  styleUrls: ['./apply-jobs.component.css']
})
export class ApplyJobsComponent {
  applicationForm: FormGroup;

  constructor(@Inject(FormBuilder) private fb: FormBuilder) {
    this.applicationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      skills: ['', Validators.required],
      certifications: [''],
      jobAppliedFor: ['', Validators.required],
      references: ['']
    });
  }

  // On form submit
  onSubmit() {
    if (this.applicationForm.valid) {
      console.log(this.applicationForm.value);
      alert('Application submitted successfully!');
      this.applicationForm.reset();
    }
  }
}
