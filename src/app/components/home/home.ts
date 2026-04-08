import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public restaurants = [
    { id: 1, name: 'Dominos' },
    { id: 2, name: 'KFC' },
    { id: 3, name: 'McDonalds' },
  ];

  constructor(private router: Router) {}

  public openRestaurant(id: number) {
    this.router.navigate(['/restaurant', id]);
  }
}
