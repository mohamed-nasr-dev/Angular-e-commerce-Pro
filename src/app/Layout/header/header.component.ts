import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../Service/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  routes: string[] = [];

  constructor(private userAuth: UserAuthService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userAuth.getuserIsLoggedIn().subscribe((data) => {
      this.routes = [
        'Home',
        'Products',
        'admin',
        'register',
        'AboutUs',
        data ? 'Logout' : 'Login',
        data ? 'profile' : '',
      ];
    });
  }
}
