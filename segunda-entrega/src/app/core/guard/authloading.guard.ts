import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthloadingGuard implements CanActivate {

  constructor(
    private autenticationService:AuthService,
    private router : Router,
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!Boolean(this.autenticationService.getAutenticationByToken())){
        return this.router.parseUrl("/login");
      }
        return Boolean(this.autenticationService.getAutenticationByToken());
  }
  
}
