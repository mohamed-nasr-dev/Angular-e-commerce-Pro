import { Component } from '@angular/core';
import { UserAuthService } from '../../Service/user-auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  user: FormGroup;
  constructor(
    private userAuth: UserAuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.user = this.fb.group({
      // ii)	Email, use required, Email validators.
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.email]],
    });
  }
  get email() {
    return this.user.get('email');
  }

  get password() {
    return this.user.get('password');
  }
  login() {
    console.log(this.user);
    this.userAuth.userLoggedIn('hemdan', 'lhdjh');
    this.router.navigate(['/Logout']);
  }
}
