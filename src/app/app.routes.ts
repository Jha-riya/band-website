import {Routes} from '@angular/router';
import {AboutPage} from './about-page/about-page';
import {HomePage} from './home-page/home-page';
import {StorePage} from './store-page/store-page';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'about', component: AboutPage},
  {path: 'store', component: StorePage}
];
