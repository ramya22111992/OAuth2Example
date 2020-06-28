import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { ErrorNotificationService } from '../error-notification.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private ErrorServ:ErrorNotificationService,private zone:NgZone) { }

  error:string;

  ngOnInit() {
    this.ErrorServ.returnAsObservable().subscribe(err=>{
      this.zone.run(()=>{
        
        this.error=err; 
      })
    
    });
  }

}
