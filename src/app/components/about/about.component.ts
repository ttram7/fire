import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about-fire',
  standalone: true,
  imports: [RouterModule],
  template: `
  
  <main>
    <h2> Financial Independence, Retire Early </h2>
    <p>FIRE is a movement for people who want to retire 
      earlier than the traditional age of 65, by saving 
      money through heavily investing.
    </p>
  </main>
  `,
  styleUrl: '../../app.component.css'
})

export class AboutComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
}