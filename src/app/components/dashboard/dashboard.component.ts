import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule]  // Add CommonModule here
})
export class DashboardComponent implements OnInit {
  jobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Co', rating: 4.5 },
    { id: 2, title: 'Product Manager', company: 'Innovate Inc', rating: 4.0 },
  ];

  users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  ];

  ngOnInit(): void {
    // This can be replaced with actual API call to fetch users and jobs from backend
  }

  addJob() {
    const newJob = { id: Date.now(), title: 'New Job', company: 'New Co', rating: 5 };
    this.jobs.push(newJob);
  }

  removeJob(jobId: number) {
    this.jobs = this.jobs.filter((job) => job.id !== jobId);
  }

  addUser() {
    const newUser = { id: Date.now(), name: 'New User', email: 'newuser@example.com' };
    this.users.push(newUser);
  }

  removeUser(userId: number) {
    this.users = this.users.filter((user) => user.id !== userId);
  }

  // Manually iterate over jobs and users using an index
  getJobsLength() {
    return this.jobs.length;
  }

  getUsersLength() {
    return this.users.length;
  }
}
