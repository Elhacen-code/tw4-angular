import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Description for product 1',
      status: 'In Stock',
      category: 'Electronics',
      createdAt: new Date('2024-01-15')
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'Description for product 2',
      status: 'Out of Stock',
      category: 'Clothing',
      createdAt: new Date('2024-02-20')
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      description: 'Description for product 3',
      status: 'In Stock',
      category: 'Electronics',
      createdAt: new Date('2024-03-10')
    },
  ];

  searchTerm: string = '';
  selectedCategory: string = 'all';
  selectedDate: string = 'All Time';
  filteredProducts = [...this.products];

  categories = ['Electronics', 'Clothing', 'Books', 'Sports'];
  dates = ['All Time', 'Last 7 Days', 'Last 30 Days', 'Last 3 Months'];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSearch(event: any) {
    this.filterProducts();
  }

  onCategoryFilterChange(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  onDateFilterChange(date: string) {
    this.selectedDate = date;
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesCategory = this.selectedCategory === 'all' || product.category === this.selectedCategory;

      let matchesDate = true;
      const now = new Date();
      const productDate = new Date(product.createdAt);

      switch(this.selectedDate) {
        case 'Last 7 Days':
          matchesDate = (now.getTime() - productDate.getTime()) <= 7 * 24 * 60 * 60 * 1000;
          break;
        case 'Last 30 Days':
          matchesDate = (now.getTime() - productDate.getTime()) <= 30 * 24 * 60 * 60 * 1000;
          break;
        case 'Last 3 Months':
          matchesDate = (now.getTime() - productDate.getTime()) <= 90 * 24 * 60 * 60 * 1000;
          break;
      }

      return matchesSearch && matchesCategory && matchesDate;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
