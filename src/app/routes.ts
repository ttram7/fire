import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';

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