import { Injectable } from '@angular/core';

// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  router: any;
  constructor(private Usergaurd: ServiceService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // console.log('gaurd is working');
    // if (this.Usergaurd.isLoggedIn()) {
    //   return true;
    // } else {
    //   window.alert(
    //     "You don't have permission to view this page unauthorized!!"
    //   );
    //   this.router.navigate(['/']);
      // return false;
      return true;
    // }
  }
}
