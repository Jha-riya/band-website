import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
  standalone: true
})
export class AboutPage {
  constructor(private router: Router) {
  }

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
