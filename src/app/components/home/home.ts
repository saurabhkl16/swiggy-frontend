import { ChangeDetectorRef, Component } from '@angular/core';
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
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.mainService.getRestaurants().subscribe({
      next: (res) => {
        this.restaurants = res;
        this.cdr.detectChanges();
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public openRestaurant(id: number) {
    if (this.mainService.isLogin() === true) {
      this.router.navigate(['/restaurant', id]);
    } else {
      this.mainService.showError('Please LogIn First');
    }
  }
}
