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
      username: 'ahmed.sidi',
      email: 'ahmed.sidi@example.com',
      nni: '123456789',
      phoneNumber: '1234567890',
      firstName: 'Ahmed',
      lastName: 'Sidi',
      gender: 'Male',
      address: 'Nouakchott',
      enabled: true,
      birthDate: '1990-01-01',
      role: {
        id: 1,
        name: 'Backend Developer'
      },
      createdAt: '2025-03-25T00:00:00',
      updatedAt: '2025-03-25T00:00:00'
    },
    {
      id: 2,
      username: 'fatimetou.ali',
      email: 'fatimetou.ali@example.com',
      nni: '987654321',
      phoneNumber: '0987654321',
      firstName: 'Fatimetou',
      lastName: 'Ali',
      gender: 'Female',
      address: 'Nouakchott',
      enabled: true,
      birthDate: '1992-02-02',
      role: {
        id: 2,
        name: 'UI/UX Designer'
      },
      createdAt: '2025-03-30T00:00:00',
      updatedAt: '2025-03-30T00:00:00'
    },
    {
      id: 3,
      username: 'khadijetou.ahmed',
      email: 'khadijetou.ahmed@example.com',
      nni: '456789123',
      phoneNumber: '4567891230',
      firstName: 'Khadijetou',
      lastName: 'Ahmed',
      gender: 'Female',
      address: 'Nouakchott',
      enabled: true,
      birthDate: '1993-03-03',
      role: {
        id: 3,
        name: 'QA Engineer'
      },
      createdAt: '2025-03-21T00:00:00',
      updatedAt: '2025-03-21T00:00:00'
    },
    {
      id: 4,
      username: 'ismail.saleck',
      email: 'ismail.saleck@example.com',
      nni: '789123456',
      phoneNumber: '7891234560',
      firstName: 'Ismail',
      lastName: 'Saleck',
      gender: 'Male',
      address: 'Nouakchott',
      enabled: true,
      birthDate: '1994-04-04',
      role: {
        id: 4,
        name: 'DevOps Engineer'
      },
      createdAt: '2025-03-20T00:00:00',
      updatedAt: '2025-03-20T00:00:00'
    },
    {
      id: 5,
      username: 'souleymane.med',
      email: 'souleymane.med@example.com',
      nni: '321654987',
      phoneNumber: '3216549870',
      firstName: 'Souleymane',
      lastName: 'Med',
      gender: 'Male',
      address: 'Nouakchott',
      enabled: true,
      birthDate: '1995-05-05',
      role: {
        id: 5,
        name: 'Frontend Dev'
      },
      createdAt: '2025-03-29T00:00:00',
      updatedAt: '2025-03-29T00:00:00'
    },
    {
      id: 6,
      username: 'mariam.ali',
      email: 'mariam.ali@example.com',
      nni: '654987321',
      phoneNumber: '6549873210',
      firstName: 'Mariam',
      lastName: 'Ali',
      gender: 'Female',
      address: 'Nouakchott',
      enabled: true,
      birthDate: '1996-06-06',
      role: {
        id: 6,
        name: 'Project Manager'
      },
      createdAt: '2025-03-15T00:00:00',
      updatedAt: '2025-03-15T00:00:00'
    },
    {
      id: 7,
      username: 'mohamed.elhacen',
      email: 'mohamed.elhacen@example.com',
      nni: '987321654',
      phoneNumber: '9873216540',
      firstName: 'Mohamed',
      lastName: 'Elhacen',
      gender: 'Male',
      address: 'Nouakchott',
      enabled: true,
      birthDate: '1997-07-07',
      role: {
        id: 7,
        name: 'Tech Lead'
      },
      createdAt: '2025-04-01T00:00:00',
      updatedAt: '2025-04-01T00:00:00'
    },
    {
      id: 8,
      username: 'aminetou.khaled',
      email: 'aminetou.khaled@example.com',
      nni: '123789456',
      phoneNumber: '1237894560',
      firstName: 'Aminetou',
      lastName: 'Khaled',
      gender: 'Female',
      address: 'Nouakchott',
      enabled: true,
      birthDate: '1998-08-08',
      role: {
        id: 8,
        name: 'Data Scientist'
      },
      createdAt: '2025-03-27T00:00:00',
      updatedAt: '2025-03-27T00:00:00'
    },
    {
      id: 9,
      username: 'yacoub.diop',
      email: 'yacoub.diop@example.com',
      nni: '456123789',
      phoneNumber: '4561237890',
      firstName: 'Yacoub',
      lastName: 'Diop',
      gender: 'Male',
      address: 'Nouakchott',
      enabled: true,
      birthDate: '1999-09-09',
      role: {
        id: 9,
        name: 'Mobile Dev'
      },
      createdAt: '2025-03-31T00:00:00',
      updatedAt: '2025-03-31T00:00:00'
    },
    {
      id: 10,
      username: 'zeinab.mint',
      email: 'zeinab.mint@example.com',
      nni: '789456123',
      phoneNumber: '7894561230',
      firstName: 'Zeinab',
      lastName: 'Mint',
      gender: 'Female',
      address: 'Nouakchott',
      enabled: true,
      birthDate: '2000-10-10',
      role: {
        id: 10,
        name: 'Scrum Master'
      },
      createdAt: '2025-03-01T00:00:00',
      updatedAt: '2025-03-01T00:00:00'
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
