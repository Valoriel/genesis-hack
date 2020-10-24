import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/login.guard';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'articles',
    loadChildren: () => import('./article-list/article-list.module').then(m => m.ArticleListModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
