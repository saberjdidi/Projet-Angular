import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Component } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
