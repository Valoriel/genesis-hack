import {Component, Input, OnInit} from '@angular/core';
import {ArticleInterface} from '../../../../shared/interfaces/article.interface';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @Input() article: ArticleInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
