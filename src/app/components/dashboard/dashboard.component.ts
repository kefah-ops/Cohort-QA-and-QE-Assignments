// dashboard.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

interface User {
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  totalUsers = 2456;
  totalSales = 124350;
  totalOrders = 832;
  
  // Chart instances
  userGrowthChart: Chart | null = null;
  sessionsChart: Chart | null = null;
  ordersChart: Chart | null = null;
  
  users: User[] = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
    { name: 'Mike Johnson', email: 'mike@example.com', role: 'Editor', status: 'inactive' }
  ];

  constructor() {}
  
  ngOnInit(): void {
    // Any initialization logic that doesn't require the DOM
  }
  
  ngAfterViewInit(): void {
    // Initialize charts after the view is initialized
    this.initCharts();
  }
  
  initCharts(): void {
    this.initUserGrowthChart();
    this.initSessionsChart();
    this.initOrdersChart();
  }
  
  initUserGrowthChart(): void {
    const ctx = document.getElementById('userGrowthChart') as HTMLCanvasElement;
    if (!ctx) return;
    
    this.userGrowthChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'New Users',
          data: [120, 190, 210, 280, 250, 330],
          borderColor: '#2196f3',
          backgroundColor: 'rgba(33, 150, 243, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  initSessionsChart(): void {
    const ctx = document.getElementById('sessionsChart') as HTMLCanvasElement;
    if (!ctx) return;
    
    this.sessionsChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Sessions',
          data: [85, 72, 78, 95, 80, 54, 42],
          backgroundColor: 'rgba(76, 175, 80, 0.8)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  initOrdersChart(): void {
    const ctx = document.getElementById('ordersChart') as HTMLCanvasElement;
    if (!ctx) return;
    
    this.ordersChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Pending', 'Cancelled'],
        datasets: [{
          data: [65, 25, 10],
          backgroundColor: [
            'rgba(76, 175, 80, 0.8)',
            'rgba(255, 152, 0, 0.8)',
            'rgba(244, 67, 54, 0.8)'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
  
  topJobs = [
    { title: 'Frontend Developer', applications: 150, trend: [50, 80, 90, 120, 140, 150] },
    { title: 'Backend Engineer', applications: 120, trend: [30, 40, 60, 90, 100, 120] }
  ];

  lowestJobs = [
    { title: 'Technical Writer', applications: 5, trend: [10, 8, 6, 4, 5, 5] },
    { title: 'QA Tester', applications: 8, trend: [12, 10, 9, 8, 7, 8] }
  ];

  topCompanies = [
    { name: 'TechCorp', jobsPosted: 30, trend: [15, 18, 20, 25, 28, 30] },
    { name: 'Innovate Ltd.', jobsPosted: 25, trend: [10, 12, 15, 20, 22, 25] }
  ];

 

  ngAfterViewInit1(): void {
    this.topJobs.forEach((job, i) => {
      this.renderChart(`topChart${i}`, job.trend);
    });

    this.lowestJobs.forEach((job, i) => {
      this.renderChart(`lowChart${i}`, job.trend);
    });

    this.topCompanies.forEach((company, i) => {
      this.renderChart(`companyChart${i}`, company.trend);
    });
  }

  renderChart(canvasId: string, data: number[]) {
    const ctx = document.getElementById(canvasId) as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array(data.length).fill(''),
        datasets: [
          {
            data,
            borderColor: '#007b7f',
            backgroundColor: 'rgba(0, 123, 127, 0.1)',
            fill: true,
            pointRadius: 0,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  }
}