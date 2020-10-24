import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public router: Router) {
  }

  canActivate(): Observable<any> {
    const authToken = localStorage.getItem('auth');
    return of(true);
  }

}
