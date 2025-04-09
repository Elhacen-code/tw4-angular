import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      fullName: 'Ahmed Sidi',
      role: 'Backend Developer',
      lastLogin: '3 days ago',
      hireDate: 'Mar 25, 2025',
      avatarUrl: 'https://ui-avatars.com/api/?name=Ahmed+Sidi&background=4f46e5&color=fff'
    },
    {
      id: 2,
      fullName: 'Fatimetou Ali',
      role: 'UI/UX Designer',
      lastLogin: 'Today',
      hireDate: 'Mar 30, 2025',
      avatarUrl: 'https://ui-avatars.com/api/?name=Fatima+Ly&background=1e40af&color=fff'
    },
    {
      id: 3,
      fullName: 'Khadijetou Admed',
      role: 'QA Engineer',
      lastLogin: '5 days ago',
      hireDate: 'Mar 21, 2025',
      avatarUrl: 'https://ui-avatars.com/api/?name=Khadija+Ba&background=047857&color=fff'
    },
    {
      id: 4,
      fullName: 'Ismail Saleck',
      role: 'DevOps Engineer',
      lastLogin: '1 week ago',
      hireDate: 'Mar 20, 2025',
      avatarUrl: 'https://ui-avatars.com/api/?name=Ismail+Saleck&background=059669&color=fff'
    },
    {
      id: 5,
      fullName: 'Souleymane Med',
      role: 'Frontend Dev',
      lastLogin: 'Yesterday',
      hireDate: 'Mar 29, 2025',
      avatarUrl: 'https://ui-avatars.com/api/?name=Souleymane+Diallo&background=7c3aed&color=fff'
    },
    {
      id: 6,
      fullName: 'Mariam Ali',
      role: 'Project Manager',
      lastLogin: '2 weeks ago',
      hireDate: 'Mar 15, 2025',
      avatarUrl: 'https://ui-avatars.com/api/?name=Mariam+Kane&background=b91c1c&color=fff'
    },
    {
      id: 7,
      fullName: 'Mohamed Elhacen',
      role: 'Tech Lead',
      lastLogin: 'Today',
      hireDate: 'Apr 1, 2025',
      avatarUrl: 'https://ui-avatars.com/api/?name=Mohamed+Elhacen&background=2563eb&color=fff'
    },
    {
      id: 8,
      fullName: 'Aminetou Khaled Sow',
      role: 'Data Scientist',
      lastLogin: '4 days ago',
      hireDate: 'Mar 27, 2025',
      avatarUrl: 'https://ui-avatars.com/api/?name=Aminata+Sow&background=ea580c&color=fff'
    },
    {
      id: 9,
      fullName: 'Yacoub Dah',
      role: 'Mobile Dev',
      lastLogin: '6 hours ago',
      hireDate: 'Mar 31, 2025',
      avatarUrl: 'https://ui-avatars.com/api/?name=Yacoub+Diop&background=10b981&color=fff'
    },
    {
      id: 10,
      fullName: 'Zeinab Sidi',
      role: 'Scrum Master',
      lastLogin: '1 month ago',
      hireDate: 'Mar 01, 2025',
      avatarUrl: 'https://ui-avatars.com/api/?name=Zeinab+Mint&background=8b5cf6&color=fff'
    }
  ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find(u => u.id === id);
    return of(user);
  }
}
