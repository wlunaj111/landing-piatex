import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {SubSink} from 'subsink';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { Credentials, CredentialsService } from 'src/app/core/credentials.service';
import {MatDialog} from '@angular/material/dialog';
import { UserModel } from 'src/app/core/auth/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  durationInSeconds = 3;
  loginForm!: FormGroup;
  subs = new SubSink();
  error!: string;
  errorMsg!: string;
  userMsg!: string;
  user!: UserModel;

  @Output() loginEvent = new EventEmitter<any>();
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private credentialsService: CredentialsService,
    private dialog: MatDialog,
) {
}

openSnackBar(mensaje: any) {
  this.snackBar.open(mensaje, '', {
    duration: this.durationInSeconds * 1000
  });
}

ngOnInit(): void {

  this.loginForm = this.fb.group({
    code: ['+53', []],
    username: ['', [Validators.required, Validators.pattern('^[\\w.@+-]+$')]],     
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
}

  login()     {
    if (this.loginForm.valid) {
      this.loginForm.disable();
      this.authService.login(this.loginForm.value).subscribe((response:any) => {
        this.error = '';
        const {access_token, refresh_token} = response;
        const credentials: Credentials = {access_token, refresh_token};
        this.credentialsService.setCredentials(credentials);
        this.authService.getUserData()
          .pipe(catchError((err: any) => {
            this.credentialsService.setCredentials(undefined);
            return throwError(err);
          }))
          .subscribe((user: any) => {
            this.user = user;
            const credentialsUser: Credentials = {access_token, refresh_token, user};
            this.credentialsService.setCredentials(credentialsUser);
            this.router.navigate(['example']);
            if (this.authService.canLogin()) {
              this.authService.setUserData(this.user);
              this.router.navigate(['example']);
            } else {
              this.snackBar.open('Acceso denegado.', '', {
                duration: 3000
            });
          }
        });
      }, (error) => {// Handle error
        this.loginForm.enable();
        if (error.status === 400) {
          this.openSnackBar('Usuario o contraseña inválida');
        }
        if (error.status === 401) {
          this.openSnackBar('Usuario y contraseña requeridos');
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


}
