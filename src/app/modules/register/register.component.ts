import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { MatSnackBar, MatSnackBarAction } from '@angular/material/snack-bar';
import {SubSink} from 'subsink';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { Credentials, CredentialsService } from 'src/app/core/credentials.service';
import {MatDialog} from '@angular/material/dialog';
import { UserModel } from 'src/app/core/auth/models/user';
import {CustomValidators} from '../../validators/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  //registerForm! : FormGroup


//   constructor(private fb: FormBuilder,
//     private authService: AuthService,
//     private router: Router,
//     private snackBar: MatSnackBarAction,
//     private credentialsService: CredentialsService,
//     private dialog: MatDialog,
// ) {
// }

  // ngOnInit() {
  //   this.registerForm = this.fb.group({
  //     code: ['+53', []],
  //     username: ['', [Validators.required, Validators.pattern('^[\\w.@+-]+$')]],
  //     phone_number: ['', [Validators.required]],
  //     email: ['', [Validators.email]],
  //     fecha_nacimiento: ['', [Validators.required]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     repeat_password: ['', [Validators.required]],
  //     with_mail: [false, []],
  //   },
  //   {
  //     // check whether our password and confirm password match
  //     validator: CustomValidators.passwordMatchValidator
  //   });
  //   this.registerForm.get('with_mail').valueChanges.subscribe(value => {
  //     if (value){
  //       this.registerForm.get('email').enable();
  //        this.registerForm.get('phone_number').disable();
  //     } else {
  //       this.registerForm.get('phone_number').enable();
  //       this.registerForm.get('email').disable();
  //     }
  //   });
  // }


}
