import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleListRoutingModule} from './article-list-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { ArticleItemComponent } from './article-list/article-item/article-item.component';
import { HeaderComponent } from './header/header.component';
import { UxuiModule } from '../shared/uxui/uxui.module';

@NgModule({
  declarations: [ArticleListComponent, ArticleComponent, ArticleItemComponent, HeaderComponent],
  imports: [
    CommonModule,
    ArticleListRoutingModule,
    UxuiModule
  ]
})
export class ArticleListModule { }
