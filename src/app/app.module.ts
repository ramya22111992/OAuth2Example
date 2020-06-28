import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import{HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { GitAuthComponent } from './git-auth/git-auth.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ErrorComponent } from './error/error.component';
import { ErrorHandlingInterceptorService } from './error-handling-interceptor.service';
import { NoSuchComponent } from './no-such/no-such.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    GitAuthComponent,
    RedirectComponent,
    ErrorComponent,
    NoSuchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    HttpClientXsrfModule
  ],
  providers: [
  {
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorHandlingInterceptorService,
    multi:true

  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
