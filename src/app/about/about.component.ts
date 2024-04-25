import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about-fire',
  standalone: true,
  imports: [RouterModule],
  template: `
  
  <main>
    <h2> TEST </h2>
  </main>
  `,
  styleUrl: '../app.component.css'
})

export class AboutComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
}