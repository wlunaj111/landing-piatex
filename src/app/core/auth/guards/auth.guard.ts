import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate, CanLoad {

  durationInSeconds = 3;

  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private snackBar: MatSnackBar
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLogged = this.authenticationService.isLoggedIn();
    const permiso = route.data?.['permiso'][0];

    if (!isLogged) {
      this.router.navigate(['/login']);
      return false;
    } else {
      if (permiso) {
        if (this.authenticationService.hasPermission(permiso)) {
          return true;
        } else {
          this.snackBar.open('El usuario no tiene acceso a la ruta especificada.');
          this.router.navigate(['/acceso-denegado']);
          return false;
        }
      } else {
        return true;
      }
    }
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLogged = this.authenticationService.isLoggedIn();
    const permiso = route.data.permiso[0];

    if (!isLogged) {
      this.router.navigate(['/login']);
      return false;
    } 
    
    else {
      if (permiso) {
        if (this.authenticationService.hasPermission(permiso)) {
          return true;
        } else {
          this.snackBar.open('El usuario no tiene acceso a la ruta especificada.');
          this.router.navigate(['/acceso-denegado']);
          return false;
        }
      } else {
        return true;
      }
    }

    return true;
  }
  
  
}
