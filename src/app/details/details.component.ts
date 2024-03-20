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
  <article fxLayout= "column">
      <section fxLayout= "column" fxLayoutAlign="right" >
</section>

  <h2 class="item item-1" class="listing-heading">{{housingLocation?.name}}</h2>
    <img class="item item-2" class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <p fxLayoutAlign="center center"class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="item item-3 listing-features" fxFlex="10%" >
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



 <section>
  <h2> Cost of Living </h2>
  <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
</section>


    
  </article>
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
