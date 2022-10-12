import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, 
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor() {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> { 
      return true;
    }
}