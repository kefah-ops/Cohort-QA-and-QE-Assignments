// recruiter-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface JobListing {
  title: string;
  company: string;
  rating: number;
}

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: '../recruiters/recruiters.component.html',
  styleUrls: ['../recruiters/recruiters.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class RecruitersComponent implements OnInit {
  jobListings: JobListing[] = [
    { title: 'Software Engineer', company: 'TechCorp', rating: 4 },
    { title: 'Data Scientist', company: 'DataSoft', rating: 4 },
    { title: 'Product Designer', company: 'Create.ly', rating: 3.5 }
  ];

  users: User[] = [
    { name: 'Alice Johnson', email: 'alice@example.com' },
    { name: 'Bob Smith', email: 'bob@example.com' },
    { name: 'Carol Davis', email: 'carol@example.com' }
  ];

  constructor() { }

  ngOnInit(): void { }

  addNewJob(): void {
    // Implement add new job functionality
    console.log('Adding new job');
  }

  removeJob(job: JobListing): void {
    this.jobListings = this.jobListings.filter(j => j !== job);
  }

  removeUser(user: User): void {
    this.users = this.users.filter(u => u !== user);
  }
}