import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FlexLayoutModule],
  template: `
  
  <article fxLayout= "row">
  
  <main fxLayout= "column"fxFlex="80%">
    
  <h2 class="item item-1" class="listing-heading">{{housingLocation?.name}}</h2>
    <img class="item item-2" class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <p fxLayoutAlign="center center" class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="item item-3 listing-features" fxFlex="25%" >
      <div>
      <h2 fxLayoutAlign="center center" class="section-heading">Quick Flame</h2>
      </div>
      <div> 
      <ul fxLayout= "row" fxLayoutAlign="space-between">
        <li class="item item-1" >Average Cost of Living: {{housingLocation?.availableUnits}}</li>
        <li class="item item-2">Healthcare Quality: {{housingLocation?.wifi}}</li>
        <li class="item item-3">Population: {{housingLocation?.laundry}}</li>
      </ul>
</div>
 </section>
</main>



 <aside class="item item-1" fxFlex="20%">
  <h2> Friendly Fire Grade </h2>

 <a href="https://www.zillow.com/homes/{{housingLocation?.city}}_rb">Homes For Sale ></a>

</aside>




    
  </article>



  <summary>
  
<h1>Cost of Living</h1>
<p>   This will be data + details from the database TBD  </p>

<h1>Cost of Living</h1>
<p>   This will be data + details from the database TBD  </p>

<h1>Cost of Living</h1>
<p>   This will be data + details from the database TBD  </p>

</summary>

`,
  styleUrl: './details.component.css'
})

export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
