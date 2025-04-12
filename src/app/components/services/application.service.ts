import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  // Mock API call for form submission
  submitApplication(applicationData: any): Observable<any> {
    // Here you would call your API endpoint to submit the application
    return this.http.post('your-api-endpoint', applicationData);
  }
}
