import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public isLogin = signal<boolean>(false);
  private restaurantsApiUrl = 'http://localhost:8080/restaurants';
  public myCart = signal<any[]>([]);
  public totalMrp = signal(0);
  public totalFees = signal(0);
  public totalDiscounts = signal(0);
  public totalAmount = signal(0);
  public restaurantItemList: any[] = [];

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

  public updateQuantity(type: string, item: any) {
    if (type === '+') {
      item.quantity++;
      this.updateTotals();
    } else if (type === '-') {
      item.quantity--;
      this.updateTotals();
    }
  }

  public updateTotals() {
    const mrp = this.myCart().reduce((sum, item) => {
      return sum + item.price * (item.quantity || 1);
    }, 0);

    this.totalMrp.set(mrp); // log actual value

    const totalFees = mrp * 0.1; // 10% fees
    this.totalFees.set(totalFees);

    const totalDiscounts = mrp * 0.1; // 10% discount
    this.totalDiscounts.set(totalDiscounts);

    const totalAmount = mrp + totalFees - totalDiscounts; // usually discount reduces
    this.totalAmount.set(totalAmount);
  }
}
