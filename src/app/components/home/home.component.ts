import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  testimonials = [
    { name: 'Emily Carter', message: 'Skill Match AI matched me with my dream job in days!' },
    { name: 'Derrick Lee', message: 'A revolutionary way to hire smartly and efficiently!' },
    { name: 'Sandra Kim', message: 'The best platform for both job seekers and recruiters!' },
  ];

  features = [
    { icon: '💡', title: 'AI Skill Matching', desc: 'Let AI analyze your resume and match you instantly.' },
    { icon: '📊', title: 'Smart Analytics', desc: 'Insights for recruiters and job seekers in real-time.' },
    { icon: '⚡', title: 'Instant Connections', desc: 'Connect with top talent or companies instantly.' },
  ];
}
