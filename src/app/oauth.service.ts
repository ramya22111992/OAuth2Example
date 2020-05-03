import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OAuthService {

constructor(private http:HttpClient) { }

GetAuthPage():Observable<string>
{

return this.http.get<string>('//localhost:8080/AuthPage',{withCredentials:true}).pipe(catchError(err=>throwError(err)));
}

getAcessToken(auth_code:string)
{
  return this.http.post('//localhost:8080/getAccessToken',{code:auth_code},{withCredentials:true}).pipe(catchError(err=>throwError(err)))

}

getUserDetails(oath_token:string)
{
return this.http.get('//localhost:8080/getUserDetails',{headers:new HttpHeaders({
  Authorization: "token"+" "+oath_token
}),withCredentials:true}).pipe(catchError(err=>throwError(err)))

}

}
