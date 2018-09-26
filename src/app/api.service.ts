import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  loginApi(form) {
    return this.http.post('http://localhost:3000/auth/login', form);
  }
  registerApi(form) {
    return this.http.post('http://localhost:3000/auth/register', form);
  }

  //addApi(form) {
    //return this.http.post('http://localhost:3000/todo/id', form);
  //}
  //getTodos(id){
    //return this.http.get('http://localhost:3000/todo/'+id);
  //}

}
