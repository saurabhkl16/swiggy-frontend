import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MainService } from '../../services/main-service';

@Component({
  selector: 'navbar',
  imports: [RouterModule, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(public mainService: MainService) {}
}
