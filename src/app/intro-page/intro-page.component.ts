import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent {

  isExperience: string = "none";
  isSkills: string = "none";
  isProjects: string = "none";
  isArticles: string = 'none';

  constructor(){
    this.isProjects = "block";
  }

  openTab(event:any){
    if(event.target.value === 'Projects'){
      this.isProjects = "block";
      this.isExperience = "none";
      this.isSkills = "none";
      this.isArticles = "none";
    }
    else if(event.target.value === 'Skills'){
      this.isProjects = "none";
      this.isExperience = "none";
      this.isSkills = "block";
      this.isArticles = "none";
    }
    else if(event.target.value === 'Experience'){
      this.isProjects = "none";
      this.isExperience = "block";
      this.isSkills = "none";
      this.isArticles = "none";
    }
    else if(event.target.value === 'Articles'){
      this.isProjects = "none";
      this.isArticles = "block";
      this.isSkills = "none";
      this.isExperience = "none";
    }
  }
}
