import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  constructor() { }

  mySkills = [
    {
      title: "Angular",
      img: "angular.png"
    },
    {
      title: "TypeScript",
      img: "typescript.png"
    },
    {
      title: "JavaScript",
      img: "javascript.png"
    },
    {
      title: "HTML",
      img: "html.png"
    },
    {
      title: "Firebase",
      img: "firebase.png"
    },
    {
      title: "GIT",
      img: "git.png"
    },
    {
      title: "CSS",
      img: "css.png"
    },
    {
      title: "Rest-Api",
      img: "rest_api.png"
    },
    {
      title: "Scrum",
      img: "scrum.png"
    },
    {
      title: "Material Design",
      img: "material_design.png"
    }
  ]
}
