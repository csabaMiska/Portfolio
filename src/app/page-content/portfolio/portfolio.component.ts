import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../portfoliodata.service';

@Component({
  selector: 'app-portfolio',
  imports: [
    CommonModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolioDate = inject(PortfolioDataService);

  portfolioProjects = this.portfolioDate.portfolioProjects;
}
