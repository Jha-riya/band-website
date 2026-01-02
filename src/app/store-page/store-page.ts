import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-store-page',
  imports: [],
  templateUrl: './store-page.html',
  styleUrl: './store-page.css',
  standalone: true
})
export class StorePage {

  constructor(private router: Router) {
  }

  // 3. Implement the navigation logic
  navigateToAboutPage() {
    this.router.navigate(['/about']);
  }

  navigateToHomePage() {
    this.router.navigate(['']);
  }
  navigateToStorePage() {
    this.router.navigate(['/store']);
  }
}
