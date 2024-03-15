import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

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
    }
  ];
  
  export default routeConfig;