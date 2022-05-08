import { AuthService } from 'src/app/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  
  constructor(private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.authService.auth.id) {
      return true;
    }
    console.log('Bloqueado por AuthGuard - CanActivate')
    return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {
    
    if (this.authService.auth.id) {
      return true;
    }
    console.log('Bloqueado por AuthGuard - CanLoad')
    return false;
  }

  
}
