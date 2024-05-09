import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  styleUrl: './app.component.css',
  template: `
  <main>
    <header class="brand-name">
      <a [routerLink]="['/']">
        <!-- <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true"> -->
        <h1 class="brand-logo">🔥 F.I.R.E. App 🔥</h1>
        <h2 class="brand-logo">Financial Independence, Retire Early</h2>
      </a>
      <section class="nav-bar">
        <a [routerLink]="['/about']">
          <h3 class="brand-logo">About</h3>
        </a>
        <a [routerLink]="['/']">
          <h3 class="brand-logo">FIRE Cities Ranked</h3>
        </a>
        <a [routerLink]="['/']">
          <h3 class="brand-logo">Resources</h3>
        </a>
        <a [routerLink]="['/']">
          <h3 class="brand-logo">Community</h3>
        </a>
      </section>
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
})
export class AppComponent {
  title = 'homes';
}
