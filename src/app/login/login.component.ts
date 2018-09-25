import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // recuperation login forms
  // {email: 'aaa@bb.cc', password: '123'}


  email = '';
  password = '';
  reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private router: Router, private apiService: ApiService) { }

  message = '';

  ngOnInit() {
  }

  loginBtn() {

    // console.log('{ email:' + ' ' + this.email + '\n' + 'password:' + ' ' + this.password + '}');

    let chaine1;
    if (this.reg.test(this.email)) {
      chaine1 = 'test  mail valide';
    } else {
      chaine1 = 'test non valide';
    }
    console.log(chaine1);

    const myObj = { email: this.email, password: this.password };

    console.log(myObj);
    this.message = '';
    this.apiService.loginApi(myObj).subscribe(res => {
      console.log(res.json());
      if (res.json().message === 'ok') {
        this.router.navigateByUrl('/home');
      } else {
        this.message = res.json().message;
      }
    });


    // send to backend for verification

    // if OKAY then go to home

  }

}
