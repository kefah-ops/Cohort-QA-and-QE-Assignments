// apply-jobs.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-jobs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './apply-jobs.component.html',
  styleUrls: ['./apply-jobs.component.css']
})
export class ApplyJobsComponent implements OnInit {
  jobId: string = '';
  jobTitle: string = '';
  applicationForm: FormGroup;
  submitted = false;
  submitSuccess = false;
  
  // File upload properties
  resumeFile: File | null = null;
  cvFile: File | null = null;
  resumeFileName: string = '';
  cvFileName: string = '';
  maxFileSize = 5 * 1024 * 1024; // 5MB in bytes
  validFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  fileError: string = '';

  // Sample job data - in a real app, you would fetch this from a service
  jobData: any = {
    'frontend-developer': { title: 'Frontend Developer', company: 'Tech Solutions Inc.' },
    'backend-developer': { title: 'Backend Developer', company: 'Data Systems Ltd.' },
    'ux-designer': { title: 'UX Designer', company: 'Creative Designs Co.' },
    'devops-engineer': { title: 'DevOps Engineer', company: 'Cloud Dynamics' },
    'marketing-analyst': { title: 'Marketing Analyst', company: 'Growth Marketing' },
    'product-manager': { title: 'Product Manager', company: 'Innovation Products' }
  };

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.applicationForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      location: ['', [Validators.required]],
      coverLetter: [''],
      linkedinProfile: [''],
      portfolioUrl: ['']
    });
  }

  ngOnInit(): void {
    // Get job ID from route parameters
    this.route.params.subscribe(params => {
      this.jobId = params['id'];
      
      // Set job title if it exists in our data
      if (this.jobData[this.jobId]) {
        this.jobTitle = this.jobData[this.jobId].title;
      } else {
        this.jobTitle = 'Job Position';
      }
    });
  }

  onResumeChange(event: Event): void {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      const file = element.files[0];
      
      // Validate file type
      if (!this.validFileTypes.includes(file.type)) {
        this.fileError = 'Invalid file type. Please upload a PDF or Word document.';
        this.resumeFile = null;
        this.resumeFileName = '';
        return;
      }
      
      // Validate file size
      if (file.size > this.maxFileSize) {
        this.fileError = 'File size exceeds 5MB limit.';
        this.resumeFile = null;
        this.resumeFileName = '';
        return;
      }
      
      this.resumeFile = file;
      this.resumeFileName = file.name;
      this.fileError = '';
    }
  }

  onCVChange(event: Event): void {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      const file = element.files[0];
      
      // Validate file type
      if (!this.validFileTypes.includes(file.type)) {
        this.fileError = 'Invalid file type. Please upload a PDF or Word document.';
        this.cvFile = null;
        this.cvFileName = '';
        return;
      }
      
      // Validate file size
      if (file.size > this.maxFileSize) {
        this.fileError = 'File size exceeds 5MB limit.';
        this.cvFile = null;
        this.cvFileName = '';
        return;
      }
      
      this.cvFile = file;
      this.cvFileName = file.name;
      this.fileError = '';
    }
  }

  removeResume(): void {
    this.resumeFile = null;
    this.resumeFileName = '';
  }

  removeCV(): void {
    this.cvFile = null;
    this.cvFileName = '';
  }

  onSubmit(): void {
    this.submitted = true;
    
    // Check if resume is uploaded
    if (!this.resumeFile) {
      this.fileError = 'Please upload your resume.';
      return;
    }
    
    if (this.applicationForm.valid) {
      // Here you would typically send the form data to your backend
      // Create a FormData object to send files
      const formData = new FormData();
      
      // Append form values
      Object.keys(this.applicationForm.value).forEach(key => {
        formData.append(key, this.applicationForm.value[key]);
      });
      
      // Append files
      if (this.resumeFile) {
        formData.append('resume', this.resumeFile, this.resumeFile.name);
      }
      
      if (this.cvFile) {
        formData.append('cv', this.cvFile, this.cvFile.name);
      }
      
      // Additional job data
      formData.append('jobId', this.jobId);
      formData.append('jobTitle', this.jobTitle);
      
      console.log('Application submitted with files:', {
        jobId: this.jobId,
        jobTitle: this.jobTitle,
        resumeFileName: this.resumeFileName,
        cvFileName: this.cvFileName,
        formData: 'FormData object created with all fields and files'
      });
      
      // Simulate successful submission
      this.submitSuccess = true;
      
      // Reset form after successful submission (after a delay for user to see success message)
      setTimeout(() => {
        this.applicationForm.reset();
        this.resumeFile = null;
        this.cvFile = null;
        this.resumeFileName = '';
        this.cvFileName = '';
        this.submitted = false;
        this.fileError = '';
      }, 5000);
    }
  }

  // Helper for validation
  get f() { 
    return this.applicationForm.controls; 
  }
  
  hasError(controlName: string): boolean {
    const control = this.f[controlName];
    return control && control.invalid && (control.dirty || control.touched);
  }
}