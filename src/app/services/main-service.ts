import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public isLogin = signal<boolean>(false);
  private restaurantsApiUrl = 'http://localhost:8080/restaurants';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) {}

  public getRestaurants() {
    return this.http.get<any[]>(this.restaurantsApiUrl);
  }

  public showSuccess(message: string) {
    this.toastr.success(message, 'Success');
  }

  public showError(message: string) {
    this.toastr.error(message, 'Error');
  }
}
