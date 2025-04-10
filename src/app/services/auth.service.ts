import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8083'; // Update this with your backend URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/smartmssa/security/auth/login`, { username, password });
  }

  register(username: string, password: string, userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password, ...userData });
  }
}
