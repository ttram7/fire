import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AboutComponent } from './components/about/about.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Location details'
    },
    {
      path: 'about',
      component: AboutComponent,
      title: 'About FIRE'
    }
  ];
  
  export default routeConfig;