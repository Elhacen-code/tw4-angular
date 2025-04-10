import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  totalUsers: number = 0;
  activeUsers: number = 0;
  rolesDistribution: { [key: string]: number } = {};

  // Line Chart - User Growth
  lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Users',
        data: [0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  // Bar Chart - Roles Distribution
  barChartData = {
    labels: [] as string[],
    datasets: [
      {
        label: 'Team Members',
        data: [] as number[],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.totalUsers = users.length;
      this.updateCharts();
    });
  }

  private updateCharts(): void {
    // Calculate active users (using enabled status)
    this.activeUsers = this.users.filter(user => user.enabled).length;

    // Update roles distribution
    this.rolesDistribution = this.users.reduce((acc, user) => {
      const roleName = user.role?.name || 'No Role';
      acc[roleName] = (acc[roleName] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    // Update bar chart data
    this.barChartData.labels = Object.keys(this.rolesDistribution);
    this.barChartData.datasets[0].data = Object.values(this.rolesDistribution);

    // Update line chart data (using createdAt dates)
    const monthlyGrowth = this.calculateMonthlyGrowth();
    this.lineChartData.datasets[0].data = monthlyGrowth;
  }

  private calculateMonthlyGrowth(): number[] {
    const monthlyData = [0, 0, 0, 0, 0, 0];
    this.users.forEach(user => {
      const createdDate = new Date(user.createdAt);
      const monthIndex = createdDate.getMonth();
      if (monthIndex >= 0 && monthIndex < 6) {
        monthlyData[monthIndex]++;
      }
    });
    return monthlyData;
  }
}
