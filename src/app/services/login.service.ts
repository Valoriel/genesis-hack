import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'https://bcs-hack.herokuapp.com/api';
  constructor(private router: Router,
              private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, {email, password}).pipe(tap(res => {
      this._saveToken((res as any).token);
      this.router.navigate(['/articles']);
  }));
    // if (login === 'user@email.com' && password === 'qwerty') {
    //   return of('token').pipe(tap((token: string) => {
    //     this._saveToken(token);
    //     this.router.navigate(['/articles']);
    //   }));
    // }
  }

  private _saveToken(token): void {
    localStorage.setItem('token', token);
  }

  private _removeToken(): void {
    localStorage.removeItem('token');
  }

  getAllArticles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/article/recommended?page=0`).pipe(map(res => (res as any).content));
  }

  rateArticle(articleId: string, preference: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/article/rate?articleId=${articleId}&preference=${preference}`, {});
  }

  getArticleById(articleId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/article/${articleId}`, {});
  }
 }
