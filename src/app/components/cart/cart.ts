import { Component, signal } from '@angular/core';
import { MainService } from '../../services/main-service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  public totalMrp = signal(0);
  public totalFees = signal(0);
  public totalDiscounts = signal(0);
  public totalAmount = signal(0);

  constructor(public service: MainService) {
    this.service.updateTotals();
  }

  ngOnInit() {}
}
