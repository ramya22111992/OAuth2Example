import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {  ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { GitAuthComponent } from './git-auth/git-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    GitAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    HttpClientXsrfModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
