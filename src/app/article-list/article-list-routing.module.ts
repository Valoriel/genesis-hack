import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleListModule} from './article-list.module';
import {ArticleComponent} from './article/article.component';



const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent,
  },
  {
    path: ':userId',
    component: ArticleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ArticleListRoutingModule { }
