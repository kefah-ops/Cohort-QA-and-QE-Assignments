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
  
  addNewUser(): void {
    console.log('Add new user clicked');
    // Implement adding a new user
  }
  
  editUser(user: User): void {
    console.log('Edit user:', user);
    // Implement editing a user
  }
  
  viewUserDetails(user: User): void {
    console.log('View user details:', user);
    // Implement viewing user details
  }
}