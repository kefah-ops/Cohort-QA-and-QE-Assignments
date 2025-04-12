// admin-dashboard.service.ts
import { Injectable } from '@angular/core';
import { Job } from '../dashboard/job.model';  // Adjust the import path

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  private jobs: Job[] = [
    { id: 1, title: 'Software Developer', company: 'Company A', rating: 4.5 },
    { id: 2, title: 'Project Manager', company: 'Company B', rating: 3.8 },
    { id: 3, title: 'Data Scientist', company: 'Company C', rating: 4.2 }
  ];

  getJobs(): Job[] {
    return this.jobs;
  }

  addJob(job: Job): void {
    this.jobs.push(job);
  }

  deleteJob(id: number): void {
    this.jobs = this.jobs.filter(job => job.id !== id);
  }

  editJob(id: number, updatedJob: Partial<Job>): void {
    const jobIndex = this.jobs.findIndex(job => job.id === id);
    if (jobIndex >= 0) {
      this.jobs[jobIndex] = { ...this.jobs[jobIndex], ...updatedJob };
    }
  }
}
