import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { GitAuthComponent } from './git-auth/git-auth.component';
import { ExtUrlResolverService } from './ext-url-resolver.service';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
