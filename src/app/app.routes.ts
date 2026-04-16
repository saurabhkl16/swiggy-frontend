import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { Restaurant } from './components/restaurant/restaurant';
import { Cart } from './components/cart/cart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'home', component: Home },
  { path: 'restaurant/:id', component: Restaurant },
  { path: 'cart', component: Cart },
];
