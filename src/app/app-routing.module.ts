import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { GitAuthComponent } from './git-auth/git-auth.component';
import { ExtUrlResolverService } from './ext-url-resolver.service';
import { RedirectComponent } from './redirect/redirect.component';
import { NoSuchComponent } from './no-such/no-such.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:'login'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'test',
    component: GitAuthComponent,
    resolve: {
        url: ExtUrlResolverService
    }
},
{
  path:'redirect',
  component:RedirectComponent
},
{
  path:'**',
  component:NoSuchComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
