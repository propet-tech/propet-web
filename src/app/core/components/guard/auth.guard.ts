import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../service/User.Service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(
  private  userService: UserService,
  private router: Router
){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | boolean   {
      if(this.userService.isLoggedIn == true){
        return true;
      }
      this.router.navigate(['']);
      localStorage.clear();
      return false
  }
  
}
