import { Component, Input, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../models/housinglocation';
import { References } from '../../references';
import { ResearchReferences } from '../../models/researchreferences';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FlexLayoutModule, RouterLink, RouterModule],
  template: `
  
  <article fxLayout= "row">
    <main fxLayout= "column"fxFlex="80%">
      <h2 class="item item-1" class="listing-heading">{{housingLocation?.name}}</h2>
      <img class="item item-2" class="listing-photo" [src]="housingLocation?.photo"
        alt="Snapshot of {{housingLocation?.name}}"/>
      <section class="listing-description">
        <p fxLayoutAlign="center center" class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="item item-3 listing-features" fxFlex="25%" >
        <div>
          <h2 fxLayoutAlign="center center" class="section-heading">Quick View</h2>
        </div>
        <div> 
          <ul fxLayout= "row" fxLayoutAlign="space-between">
            <li class="item item-1" >Average Cost of Living: \${{housingLocation?.col}} per month</li>
            <li class="item item-2">
              Healthcare Quality: {{housingLocation?.healthcareScore}} nationwide
              (<a href="{{researchReferences?.healthcareScoreUrl}}">Source</a>)
            </li>
            <li class="item item-3">Population: {{housingLocation?.population}}</li>
          </ul>
        </div>
      </section>
    </main>
    <aside class="item item-1" fxFlex="20%">
      <h2> Friendly Fire Grade </h2>
      <a href="https://www.zillow.com/homes/{{housingLocation?.city}}_rb">Homes For Sale ></a>
    </aside>
  </article>
  <div fxLayout= "row">
    <section class="item item-1" fxFlex="90%"> 
      <h1 id="COL">Cost of Living</h1>
      <p>{{researchReferences?.placeholderText}}</p>
      <h1>Public Transportation System</h1>
      <p>{{researchReferences?.placeholderText}}</p>
      <h1>Healthcare Quality</h1>
      <p>{{researchReferences?.placeholderText}}</p>
    </section>
    <aside class="item item-2">
      <!--05/02/24: Content & Routing Not Implemented yet for COL, PTS, or HQ pages-->
      <p>Content</p>
      <ul> 
        <li>
          <!-- this is just a sample route; not final destination -->
          <a [routerLink]="['/about']">Cost of Living</a>
        </li>
        <li>  
          <a href="#COL">Public Transportation System</a>
        </li>
        <li>  
          <a href="#COL">Healthcare Quality</a>
        </li>
      </ul>
    </aside>
  </div>
`,
  styleUrl: './details.component.css'
})

export class DetailsComponent {

  // @Input() researchReferences!: ResearchReferences;

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  references: References = inject(References);
  researchReferences: ResearchReferences | undefined;
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);

    this.housingService.getHousingLocationById(`${housingLocationId}`).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });

    this.references.getAllResearchReferences().then((researchReferences: ResearchReferences) => {
      this.researchReferences = researchReferences;
    })
  }
}