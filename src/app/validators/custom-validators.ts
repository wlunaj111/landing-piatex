import {AbstractControl} from '@angular/forms';

// export class CustomValidators {
//   static passwordMatchValidator(control: AbstractControl) {

//     const password: string = control.get('password').value ; // get password from our password form control
//     const confirmPassword: string = control.get('repeat_password').value; // get password from our confirmPassword form control
//     // compare is the password math
//     if (password !== confirmPassword) {
//       // if they don't match, set an error in our confirmPassword form control
//       control.get('repeat_password').setErrors({NoPassswordMatch: true});
//     }
//   }
// }

export class CustomValidators {
    static passwordMatchValidator(control: AbstractControl) {
      const passwordControl = control.get('password');
      const confirmPasswordControl = control.get('repeat_password');
      if (passwordControl && confirmPasswordControl) { // asegurarse de que los controles no sean nulos
        const password: string = passwordControl.value;
        const confirmPassword: string = confirmPasswordControl.value;
        if (password !== confirmPassword) {
          confirmPasswordControl.setErrors({ NoPassswordMatch: true });
        } else {
          confirmPasswordControl.setErrors(null);
        }
      }
    }
  }
