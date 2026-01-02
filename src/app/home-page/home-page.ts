import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  standalone: true
})
export class HomePage {

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
