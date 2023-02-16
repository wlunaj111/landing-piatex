import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
//import {baseUrlv2, ip, piatex} from '../app.config';
import {BehaviorSubject} from 'rxjs';
//import {UserModel} from '../models/user';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CredentialsService} from './credentials.service';
//const authUrl = `${piatex}/o/token/`;
import {environment} from '../../environments/environment';
import { UserModel } from './auth/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = null;
  authUser = {
    access_token: '',
    refresh_token: ''
  };

  public userSource = new BehaviorSubject<UserModel>(this.user);
  user$ = this.userSource.asObservable();
  durationInSeconds = 3;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private credentialsService: CredentialsService
  ) {
  }

  get permissions() {
    return this.credentialsService.credentials?.user.groups.filter((group: any) => group.name !== 'Usuario comúnn').reduce(
      (accumulator: any, currentValue: any) => accumulator.concat(currentValue.permissions)
      , []);
  }

  get groups() {
    return this.credentialsService.credentials?.user.groups;
  }

  get isAdmin() {
    return this.credentialsService.credentials?.user.groups.some((g : any) => g.name === 'Administrators');
  }

  login(loginData:any) {
    const body = new FormData();
    body.append('grant_type', 'password');
    body.append('client_id', 'SCBs6MhWpdArFZzJoojNkIcIf0iCFYXXSHB4uuGC');
    //body.append('client_id', 'TxaIYwjZeO6yCSwHOyEqO6Q3A2w90UXu4NA6bd3r');
    if (isNaN(loginData.username)) {
      body.append('username', loginData.username);
    } else {
      body.append('username', loginData.code + loginData.username);
    }
    body.append('password', loginData.password);
    return this.httpClient.post(environment.login, body);
  }

  getUserData() {
    return this.httpClient.get(environment.user);
  }

  get userData() {
    return (
      this.credentialsService.credentials &&
      this.credentialsService.credentials.user
    );
  }

  async getUserData1() {
    if (!this.user) {
      await this.httpClient.get(environment.user).subscribe((user: any) => {
        this.userSource.next(user);
      });
      return this.userSource;
    } else {
      return this.user;
    }
  }

  setUserData(user: any) {
    this.userSource.next(user);
  }

  isLoggedIn() {
    return this.credentialsService.isAuthenticated();
    //return !!localStorage.getItem('authUser');
  }

  getToken() {
    if (this.isLoggedIn()) {
      const access_token : any = this.credentialsService.credentials;
      return access_token;
      /*const authUser = JSON.parse(localStorage.getItem('authUser'));
      return authUser.access_token;*/
    }
  }

  logout() {
    this.credentialsService.setCredentials(undefined);
    this.router.navigate(['/home']);
  }


  async isAuthorized(permiso: string) {
    let response;
    this.userSource.subscribe((res: any) => {
      if (res) {
        response = this.checkUser(res.groups, permiso);
      }
    });
    return response;
  }

  canLogin() {
    return this.hasPermission('login_admin_usuario');
  }

  hasPermission(permission: string) {
    const permisos = this.permissions
    return this.permissions.findIndex((permiso: any) => permiso.codename === permission) >= 0;
  }

  openSnackBar(mensaje: any) {
    this.snackBar.open(mensaje, '', {
      duration: this.durationInSeconds * 1000
    });
  }

  isDrawable(permiso: string) {
    let response = false;
    this.userSource.subscribe((res: any) => {
      if (res) {
        response = this.checkUser(res.groups, permiso);
      }
    });
    return response;
  }

  checkUser(grupos: any, permiso: any) {
    let permisos = [];
    let access: boolean = false;
    if (grupos.length == 2) {
      if (grupos[0].name == 'Usuario común') {
        permisos = grupos[1].permissions;
      } else {
        permisos = grupos[0].permissions;
      }
    }
    if (permisos) {
      for (var i = 0, len = permisos.length; i < len; i++) {
        if (permisos[i].codename == permiso) {
          access = true;
        }
      }
    }
    return access;
  }

  register(registerForm: any) {
    const newUser = new FormData();
    newUser.append('username', registerForm.username);
    registerForm.phone_number && newUser.append('phone_number', registerForm.phone_number);
    registerForm.with_mail && newUser.append('with_mail', registerForm.with_mail);
    registerForm.email && newUser.append('email', registerForm.email);
    newUser.append('fecha_nacimiento', registerForm.fecha_nacimiento);
    newUser.append('password', registerForm.password);
    registerForm.phone_number && newUser.append('country_code', '+53');

    console.log('newUser',newUser)

    return this.httpClient.post(`${environment.register}`, newUser);
  }

  verifySmsCode(code: any) {
    const codeBody = new FormData();
    codeBody.append('token', code);
    codeBody.append('client_id', environment.clientId);
    return this.httpClient.post(`${environment.verify_token}`, codeBody);
  }

  // get_username(username) {
  //   return this.httpClient.get(`${baseUrl}/v1/usuario/${username}/generar_username`);
  // }


}
