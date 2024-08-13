import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoginMode: boolean = true;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, this.passwordValidator]],
    });
  }

  passwordValidator(control: any) {
    const value = control.value;
    if (!value) return null;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasValidLength = value.length >= 8;

    const valid = hasUpperCase && hasNumber && hasSpecialChar && hasValidLength;

    if (!valid) {
      return { isPasswordInvalid: true };
    }
    return null;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      if (this.isLoginMode) {
        if (this.authService.login(username, password)) {
          this.errorMessage = '';
          this.router.navigate(['/overview']);
        } else {
          this.errorMessage = 'Invalid username or password.';
        }
      } else {
        if (this.authService.signIn(username, password)) {
          this.errorMessage = '';
          this.isLoginMode = true;
        } else {
          this.errorMessage = 'User already exists.';
        }
      }
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
  }
}
