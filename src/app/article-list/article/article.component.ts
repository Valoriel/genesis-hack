import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.services';
import {LoginService} from '../../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: any;
  difficulties: string[] = ['Очень легко', 'Легко', 'Нормально', 'Сложно', 'Очень сложно'];
  score = 0;

  constructor(private articleService: LoginService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.article = this.articleService.getArticleById(this.route.snapshot.params.userId).subscribe(res => {
    });
  }

  articleRate(): void {
    const tmpScore = this.score + 1;
    this.articleService.rateArticle(this.route.snapshot.params.userId, tmpScore).subscribe(
      () => this.router.navigate(['/articles'], { queryParams: { recomended: true } }));
  }

}
