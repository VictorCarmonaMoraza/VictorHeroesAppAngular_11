import { AuthService } from 'src/app/auth/services/auth.service';
import { Injectable } from '@angular/core';
import {CanLoad, Route,  UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  
  constructor(private authService: AuthService) { }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {
    
    console.log('CANLOAD', true);
    console.log(route);
    console.log(segments);

    if (this.authService.auth.id) {
      return true;
    }
    return false;
  }

  
}
