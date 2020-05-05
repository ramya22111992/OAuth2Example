import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OAuthService {

constructor(private http:HttpClient) { }

serverUrl:string="//localhost:8080/"

GetAuthPage():Observable<string>
{

return this.http.get<string>(this.serverUrl+'AuthPage',{withCredentials:true}).pipe(catchError(err=>throwError(err)));
}

getAcessToken(auth_code:string)
{
  return this.http.post(this.serverUrl+'getAccessToken',{code:auth_code},{withCredentials:true}).pipe(catchError(err=>throwError(err)))

}

getUserDetails()
{
return this.http.get(this.serverUrl+'getUserDetails',{withCredentials:true}).pipe(catchError(err=>throwError(err)))

}

logout()
{
  return this.http.get(this.serverUrl+'logout',{withCredentials:true}).pipe(catchError(err=>throwError(err)))
 
}

}
