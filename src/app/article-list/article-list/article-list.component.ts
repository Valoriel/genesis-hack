import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.services';
import {Observable} from 'rxjs';
import {ArticleInterface} from '../../../shared/interfaces/article.interface';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articleList: Observable<Array<ArticleInterface>>;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleList = this.articleService.getAllArticles();
  }

}
