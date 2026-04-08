import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  imports: [],
  templateUrl: './restaurant.html',
  styleUrl: './restaurant.scss',
})
export class Restaurant {
  public restaurantInfo = {
    name: 'Babla - Veg and NonVeg',
    rating: '4.3',
  };

  public restaurantItemList = [
    {
      name: 'Cold Coffe',
      rating: '4.3',
      descreption: 'Cold and sweet thik cold coffe',
    },
    {
      name: 'Vadapav',
      rating: '4.3',
      descreption: 'Cold and sweet thik cold coffe',
    },
    {
      name: 'Paneer Butter Masala',
      rating: '4.3',
      descreption: 'Cold and sweet thik cold coffe',
    },
    {
      name: 'Cold Coffe',
      rating: '4.3',
      descreption: 'Cold and sweet thik cold coffe',
    },
    {
      name: 'Cold Coffe',
      rating: '4.3',
      descreption: 'Cold and sweet thik cold coffe',
    },
  ];
}
