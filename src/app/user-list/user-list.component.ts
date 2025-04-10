import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  selectedRole: string = 'all';
  selectedDate: string = 'all';
  roles: string[] = [];
  dates: string[] = ['all', 'Today', 'Yesterday', 'Last 7 days', 'Last 30 days', 'Last 90 days'];

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
      this.roles = [...new Set(users.map(user => user.role.name))];
    });
  }

  onSearch(event: Event): void {
    const searchValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filterUsers();
  }

  onRoleFilterChange(role: string): void {
    this.selectedRole = role;
    this.filterUsers();
  }

  onDateFilterChange(date: string): void {
    this.selectedDate = date;
    this.filterUsers();
  }

  private filterUsers(): void {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = this.searchTerm === '' ||
        user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesRole = this.selectedRole === 'all' ||
        user.role.name === this.selectedRole;

      const matchesDate = this.selectedDate === 'all' ||
        this.matchesDateFilter(user.createdAt, this.selectedDate);

      return matchesSearch && matchesRole && matchesDate;
    });
  }

  private matchesDateFilter(date: string, filter: string): boolean {
    const userDate = new Date(date);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - userDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    switch (filter) {
      case 'Today':
        return diffDays === 0;
      case 'Yesterday':
        return diffDays === 1;
      case 'Last 7 days':
        return diffDays <= 7;
      case 'Last 30 days':
        return diffDays <= 30;
      case 'Last 90 days':
        return diffDays <= 90;
      default:
        return true;
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
