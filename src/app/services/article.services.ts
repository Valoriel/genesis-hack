import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {articleListMock} from '../../mock/mocks';
import {ArticleInterface} from '../../shared/interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor() {}

  getAllArticles(): Observable<ArticleInterface[]> {
    return of(articleListMock);
  }
}
