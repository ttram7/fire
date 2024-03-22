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
    <button class="primary" type="button" (click)="showPriceRange()">Price</button>
    <ng-container *ngIf="visible">
      <div class="box">
        <div class="price-range">
          <div class="min-price">
          <p>Min</p><input type="number">
          </div>
          <div class="max-price">
            <p>Max</p><input type="number">
          </div>
        </div>
        <button class="apply" type="button">Apply</button>
      </div>
    </ng-container>
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
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
  //show price range box
  displayBox:boolean = true
  //hide price range box
  visible:boolean = false

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
  //toggle price range box
  showPriceRange() {
     this.displayBox = !this.displayBox; //not equal to condition
    this.visible = !this.visible
}
// housingLocation property of type HousingLocation to HomeComponent class
// inject new service, that gets data from static array, into HomeComponent class
// constructor is first function to run when component is created


}