import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription, catchError, map, of } from 'rxjs';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly userService: UserService, private readonly router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {


    const token = localStorage.getItem('token');

    if (token) {
      return this.userService.getUser(token).pipe(
        map((data) => {
          return true;
        }),
        catchError((err) => {
          this.router.navigate(['/']);
          return of(false)
        })
      )
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
