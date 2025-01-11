import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing-page',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', './landing-page-hero.component.scss', './landing-page-titel.component.scss']
})
export class LandingPageComponent {

}
