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
  py: number = 2;
  htmlcss: number = 4;
  sql: number = 3;
  angular: number = 3;

  // softwares & IDEs
  softwares: string[] = ['Visual Studio Code', 'Visual Studio 2022', 'MS SQL Server 2017 - 2019'];

  constructor(){}
}
