import { LoginService } from './../login/login.service';
import { Observable } from 'rxjs/Rx';
import { CanActivate, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(rota: ActivatedRouteSnapshot, estado: RouterStateSnapshot) : Observable<boolean> | boolean{

    if(this.loginService.getStateUser()){
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}
