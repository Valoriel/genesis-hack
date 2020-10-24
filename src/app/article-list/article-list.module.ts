import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleListRoutingModule} from './article-list-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [ArticleListComponent, ArticleComponent],
  imports: [
    CommonModule,
    ArticleListRoutingModule
  ]
})
export class ArticleListModule { }
