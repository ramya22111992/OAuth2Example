import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import{HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { GitAuthComponent } from './git-auth/git-auth.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ErrorComponent } from './error/error.component';
import { GlobalErrorHandlerService } from './global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    GitAuthComponent,
    RedirectComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    HttpClientXsrfModule
  ],
  providers: [{
provide:ErrorHandler,
    useClass:GlobalErrorHandlerService
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
