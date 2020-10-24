import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {imageSrc} from '../../mock/mocks';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  imageSrc = imageSrc;

  constructor(private  loginService: LoginService) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  login(): void {
    const userInfo = this.loginForm.getRawValue();
    this.loginService.login(userInfo.email, userInfo.password).subscribe();
  }

}
