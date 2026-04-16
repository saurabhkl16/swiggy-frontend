import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterEvent } from '@angular/router';
import { MainService } from '../../services/main-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  imports: [FormsModule],
  templateUrl: './restaurant.html',
  styleUrl: './restaurant.scss',
})
export class Restaurant {
  public restaurantInfo = {
    name: 'Babla - Veg and NonVeg',
    rating: '4.3',
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    public service: MainService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get(`http://localhost:8080/restaurants/menu?id=${id}`).subscribe((data: any) => {
      this.service.restaurantItemList = data.menu;
      this.cdr.detectChanges();
    });
  }

  public addItemToCart(item: any) {
    this.service.myCart.update((items) => [...items, item]);
  }
}
