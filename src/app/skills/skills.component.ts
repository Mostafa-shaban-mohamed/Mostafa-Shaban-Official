import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  //programming languages
  csharp: number = 5;
  js: number = 4;
  java: number = 2;
  react: number = 2;
  htmlcss: number = 4;
  sql: number = 4;
  angular: number = 4;

  // softwares & IDEs
  softwares: string[] = ['Azure', 'VS Studio / Code', 'Netlify', 'MS SQL (2017 - 2024)'];

  constructor(){}
}
