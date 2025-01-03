import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'csaba-miska-developer';

  isImPrintedPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isImPrintedPage = this.router.url.includes('/impressum');
      this.isImPrintedPage = this.router.url.includes('/privacypolicy');
    });
  }
}
