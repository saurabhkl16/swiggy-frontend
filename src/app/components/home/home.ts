import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../services/main-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public restaurants: any[] = [];

  constructor(
    private router: Router,
    private mainService: MainService,
  ) {}

  ngOnInit() {
    this.mainService.getRestaurants().subscribe({
      next: (res) => {
        console.log(res,this.restaurants)
        this.restaurants = res;
        console.log(res,this.restaurants)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public openRestaurant(id: number) {
    this.router.navigate(['/restaurant', id]);
  }
}
