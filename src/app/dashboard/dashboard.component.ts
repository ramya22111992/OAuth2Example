import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { OAuthService } from '../oauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private active:ActivatedRoute,private serv:OAuthService,private router:Router) { }

  username:string;

  ngOnInit() {
      this.serv.getUserDetails().subscribe(data=>this.username=data["login"],err=>{throw err});
  }

logout()
{
  this.serv.logout().subscribe(data=>this.router.navigate(['/login']),err=>{throw err});
}

}
