import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtUrlResolverService implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>
  {
    window.location.href=route.queryParamMap.get('url');
    return of(null);
  }
}
