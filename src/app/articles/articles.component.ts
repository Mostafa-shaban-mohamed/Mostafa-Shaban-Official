import { Component } from '@angular/core';
import { articles } from './articles.data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent {
  articlesList = articles;
}
