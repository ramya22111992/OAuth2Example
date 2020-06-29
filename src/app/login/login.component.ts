import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { OAuthService } from '../oauth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  AuthUrl:string;

  constructor(private serv:OAuthService,private router:Router) { }
  ngOnInit() {
    this.serv.GetAuthPage().subscribe(data=>this.AuthUrl=data["authUrl"],err=>{console.log(err)});
}

  login()
  {
this.router.navigate(['/test'],{queryParams:{url:this.AuthUrl}});
  }


}
