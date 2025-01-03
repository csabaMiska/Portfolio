import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isImpressumPage: boolean = false;
  showMobileMenu:boolean;

  constructor( ) {
    this.showMobileMenu = false;
  }

  toggleMenu() {
    if (!this.showMobileMenu) {
      this.showMobileMenu = true;
    } else {
      this.showMobileMenu = false;
    }
  }
}
