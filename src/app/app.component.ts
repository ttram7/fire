import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  styleUrl: './app.component.scss',
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <!-- <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true"> -->
        <h1 class="brand-logo">🔥 F.I.R.E. App 🔥</h1>
        <h2>Financial Independence, Retire Early</h2>
      </header>
    </a>  
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
})
export class AppComponent {
  title = 'homes';
}
