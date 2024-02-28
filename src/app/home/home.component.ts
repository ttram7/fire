import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation'; // use HousingLocation interface
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button"
      (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    
    <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation">
      
    </app-housing-location>
  </section>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
// housingLocation property of type HousingLocation to HomeComponent class
// inject new service, that gets data from static array, into HomeComponent class
// constructor is first function to run when component is created


