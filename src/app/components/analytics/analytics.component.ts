import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register required Chart.js components
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

@Component({
  standalone: true,
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
  imports: [CommonModule]
})
export class AnalyticsDashboardComponent implements OnInit {
  aiInsights = [
    {
      title: 'Job Seeker Engagement',
      value: '85%',
      description: 'Percentage of active job seekers',
      trend: 'positive'
    },
    {
      title: 'Employer Sign-ups',
      value: '40%',
      description: 'Growth in employer sign-ups over the last month',
      trend: 'neutral'
    },
    {
      title: 'Applications Sent',
      value: '12,000',
      description: 'Total number of job applications sent by users',
      trend: 'positive'
    }
  ];

  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chart = new Chart('usageChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Job Applications',
          data: [1200, 1300, 1500, 1700, 1900, 2200],
          borderColor: '#007B7F',
          backgroundColor: 'rgba(0, 123, 127, 0.2)',
          fill: true,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `Applications: ${tooltipItem.raw}`
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
