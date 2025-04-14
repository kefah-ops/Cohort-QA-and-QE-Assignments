import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
  role: 'admin' | 'recruiter' | 'jobSeeker';
}

interface AuthResponse {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://your-api-url.com';  // Replace with your API URL
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  // Login method
  login(email: string, password: string): Observable<User> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      map((response) => {
        const user: User = response.user;
        if (user) {
          // Store user details and token in localStorage
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      })
    );
  }

  // Logout method
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.currentUserSubject.value !== null;
  }

  // Check if the user is an admin
  isAdmin(): boolean {
    return this.isLoggedIn() && this.currentUserSubject.value?.role === 'admin';
  }

  // Check if the user is a recruiter
  isRecruiter(): boolean {
    return this.isLoggedIn() && this.currentUserSubject.value?.role === 'recruiter';
  }

  // Check if the user is a job seeker
  isJobSeeker(): boolean {
    return this.isLoggedIn() && this.currentUserSubject.value?.role === 'jobSeeker';
  }
}
