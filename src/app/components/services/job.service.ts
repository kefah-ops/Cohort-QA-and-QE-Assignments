import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  getJobListings() {
    return [
      {
        title: 'Electrical Engineer',
        description: 'Experience required, location Canada, requirement: bachelor\'s or greater courses',
        salary: '230,000$',
        location: 'Canada',
      },
      {
        title: 'Agricultural officer',
        description: 'A farmer in need must be qualified and passionate about it with a related course in the field. Location Kenya.',
        salary: '25k/m',
        location: 'Kenya',
      },
      {
        title: 'DevOps Engineer',
        description: 'Requirements: Bachelor\'s degree in Computer Science, IT or related field; experience with CI/CD, cloud AWS, Azure, GCP',
        salary: '$130,000',
        location: 'USA',
      }
    ];
  }

  getJobFilters() {
    return [
      {
        title: 'Office administration',
        description: 'Requirements: Diploma or Bachelor\'s degree in Business Administration or related field;',
        extraInfo: 'Prior experience required; Daily supervision of office activities;',
      }
    ];
  }
}
