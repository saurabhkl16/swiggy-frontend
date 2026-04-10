import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}

  login(mobileNumber: string, password: string) {
    const body = { mobile: mobileNumber, password: password };
    return this.http.post<any>(this.apiUrl, body);
  }
}
