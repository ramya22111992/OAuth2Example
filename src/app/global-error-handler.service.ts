import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { ErrorNotificationService } from './error-notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector:Injector) { }

  handleError(error:Error|HttpErrorResponse)
  {

    var errmessage="";
let router=this.injector.get(Router);
let zone=this.injector.get(NgZone);


    if (error instanceof HttpErrorResponse) {
      // Server or connection error happened
      if (!window.navigator.onLine) {
    
   errmessage="Please check your browser's connectivity to internet";
    this.UpdateErrorInComponent(errmessage);  
      } 
      
      else {
     this.UpdateErrorInComponent(error.statusText);     
        
      if(error.status==401)
        {
    zone.run(()=>{
      router.navigate(['/login']); 
    })
 
  }
        }
       
   } else {
        console.log(error);
     // Handle Client Error (Angular Error, ReferenceError...)     
   }
  // Log the error anyway

  }

  
  UpdateErrorInComponent(message:string)
  {
let serv=this.injector.get(ErrorNotificationService);
serv.notify(message);
  }

}
