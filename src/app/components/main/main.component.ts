import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  jobFilters = [
    {
      title: 'Office Administration',
      description: "Diploma or Bachelor's in Business Admin",
      extraInfo: 'Supervise daily office activities'
    },
    {
      title: 'Engineering Roles',
      description: 'Minimum 2 years experience in Electrical/Mechanical Engineering',
      extraInfo: 'Must relocate to Canada'
    }
  ];

  jobListings = [
    {
      title: 'Electrical Engineer',
      description: 'Experience required, bachelor’s or greater, location: Canada',
      salary: '230,000$'
    },
    {
      title: 'Agricultural Officer',
      description: 'Must be qualified with farming experience. Location: Kenya',
      salary: '25k/month'
    },
    {
      title: 'DevOps Engineer',
      description: 'Bachelor’s in CS, CI/CD, cloud (AWS, Azure, GCP)',
      salary: '130,000$'
    }
  ];
}
