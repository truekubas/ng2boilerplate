/**
 * Created by andreykubasov on 02.05.17.
 */
import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate() {
    console.log('canActivate called');
    // this.gotoMain();
    return true;
  }
  gotoMain() {
    this.router.navigate(['']);
  }
}
