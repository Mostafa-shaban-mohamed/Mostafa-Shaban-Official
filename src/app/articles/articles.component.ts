import { Component } from '@angular/core';
import { articles } from './articles.data';
import { count } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articlesList: any[] = [];
  counter: number = 1;

  constructor(){
    this.articlesList = articles;
  }

  changeSlide(isPlus: boolean){
    if(this.counter >= 4){
      this.counter = isPlus ? 1 : 3;
    }
    else if(this.counter <= 1){
      this.counter = isPlus ? 2 : 4;
    }
    else{
      this.counter = isPlus ? this.counter+1 : this.counter-1;
    }
    for (let index = 0; index < this.articlesList.length; index++) {
      const element = this.articlesList[index];
      if(index == this.counter - 1){
        element.isActive = true;
      }
      else{
        element.isActive = false;
      }
    }
  }
}
