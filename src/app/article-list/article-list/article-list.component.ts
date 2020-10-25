import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.services';
import {Observable} from 'rxjs';
import {ArticleInterface} from '../../../shared/interfaces/article.interface';
import {LoginService} from '../../services/login.service';
import {tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articleList: Observable<Array<ArticleInterface>>;

  constructor(private articleService: LoginService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams.recomended) {
      this.articleList = this.articleService.getReccomendedArticles();
    } else {
      this.articleList = this.articleService.getAllArticles();
    }

  }

}
