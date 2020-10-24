import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {LoginGuard} from './shared/guards/login.guard';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'articles',
    loadChildren: () => import('./article-list/article-list.module').then(m => m.ArticleListModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
