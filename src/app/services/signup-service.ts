import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private apiUrl = 'http://localhost:8080/signup';

  constructor(private http: HttpClient) {}

  signup(name: string, mobileNumber: string, password: string) {
    const body = { name: name, mobile: mobileNumber, password: password };
    return this.http.post<any>(this.apiUrl, body);
  }
}
