// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-backend.onrender.com/api'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  // Login method
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Register method
  register(data: { fullName: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
