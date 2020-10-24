import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router) {}

  login(login: string, password: string): Observable<string> {
    if (login === 'user@email.com' && password === 'qwerty') {
      return of('token').pipe(tap((token: string) => {
        this._saveToken(token);
        this.router.navigate(['/articles']);
      }));
    }
  }

  private _saveToken(token): void {
    localStorage.setItem('token', token);
  }

  private _removeToken(): void {
    localStorage.removeItem('token');
  }
 }
