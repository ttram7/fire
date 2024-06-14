import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../models/housinglocation';
import { HousingService } from '../../services/housing.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <section class="brand-name">
    <form class="city-filter">
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button"
      (click)="filterResults(filter.value)">Search</button>
    </form>
    <button class="primary price-button" type="button" (click)="showPriceRange()">Price</button>
    <ng-container *ngIf="visible">
      <div class="box">
        <div class="price-range">
          <div class="min-price">
            <p>Min</p><input type="number" #min>
          </div>
          <div class="max-price">
              <p>Max</p><input type="number" #max>
          </div>
        </div>
        <button class="apply" type="button" (click)="filterPrice(min.valueAsNumber, max.valueAsNumber)">Apply</button>
      </div>
    </ng-container>
  </section>
  <section class="results">
    
    <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation">
      
    </app-housing-location>
    <ng-container *ngIf="filterPriceLocations">
     <app-housing-location *ngFor="let housingLocation of filteredPriceList" [housingLocation]="housingLocation"></app-housing-location>
    </ng-container>
  </section>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  filteredPriceList: HousingLocation[] = [];
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
      this.filteredPriceList = housingLocationList;
    });
  }

  
  //show price range box
  displayBox:boolean = true
  //hide price range box
  visible:boolean = false
  filterPriceLocations:boolean = false

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
  filterPrice(min:number, max:number) {
    this.filteredPriceList = this.housingLocationList.filter(
      housingLocation =>
      housingLocation?.col >= min && housingLocation?.col <= max)
    console.log(this.filteredPriceList)
    this.filteredLocationList = [];
    this.filterPriceLocations = !this.filterPriceLocations
    
  }
// housingLocation property of type HousingLocation to HomeComponent class
// inject new service, that gets data from static array, into HomeComponent class
// constructor is first function to run when component is created


}