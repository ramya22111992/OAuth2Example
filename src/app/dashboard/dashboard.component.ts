import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { OAuthService } from '../oauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private active:ActivatedRoute,private serv:OAuthService) { }

  ngOnInit() {

  
    this.active.queryParamMap.subscribe(data=>{
    console.log(data.get('code'));
    this.serv.getAcessToken(data.get('code')).subscribe(data=>{
    this.getUserData(data);
    
    },
    err=>console.log(err)); 
    
    });
  }

   getUserData(resp)
{
this.serv.getUserDetails(resp.access_token).subscribe(data=>console.log(data));

}

}
