import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomePage} from './home-page/home-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('band-website');
}
