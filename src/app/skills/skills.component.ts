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
  react: number = 3;
  htmlcss: number = 4;
  sql: number = 4;
  angular: number = 3;

  // softwares & IDEs
  softwares: string[] = ['Azure', 'VS 2022 / Code', 'Netlify', 'MS SQL (2017 - 2022)'];

  constructor(){}
}
