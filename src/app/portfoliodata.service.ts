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
  ];

  portfolioProjects = [
    {
      name: 'Pokédex',
      img: 'pokedex.png',
      used_skills: ['Javascript', 'HTML', 'CSS', 'Api'],
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      link: 'hier kommt das link',
      github_link: 'hier kommt das githublink'
    },
    {
      name: 'Join',
      img: 'join.png',
      used_skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: 'hier kommt das link',
      github_link: 'hier kommt das githublink'
    },
    {
      name: 'Sharkie',
      img: 'sharkie.png',
      used_skills: ['Javascript', 'HTML', 'CSS',],
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      link: 'hier kommt das link',
      github_link: 'hier kommt das githublink'
    }
  ];
}
