import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-jobs',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './post-jobs.component.html',
  styleUrls: ['./post-jobs.component.css']
})
export class PostJobsComponent {
  jobForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      jobTitle: ['', Validators.required],
      requirements: ['', Validators.required],
      location: ['', Validators.required],
      salary: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.jobForm.valid) {
      console.log(this.jobForm.value);
      // Here you would typically send the data to your API
      alert('Job posted successfully!');
      this.jobForm.reset();
    }
  }
}
