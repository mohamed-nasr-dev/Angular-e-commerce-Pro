import { Component } from '@angular/core';
import { UserAuthService } from '../../Service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss'],
})
export class LogOutComponent {
  constructor(private userAuth: UserAuthService, private router: Router) {}
  logout() {
    this.userAuth.userLoggedOut();
    this.router.navigate(['/Login']);
  }
}
