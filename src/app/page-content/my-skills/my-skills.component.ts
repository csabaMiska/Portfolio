import { Component, inject } from '@angular/core';
import { PortfolioDataService } from "../../portfoliodata.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  imports: [
    CommonModule
  ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  portfolioDate = inject(PortfolioDataService);

  mySkills = this.portfolioDate.mySkills;
}
