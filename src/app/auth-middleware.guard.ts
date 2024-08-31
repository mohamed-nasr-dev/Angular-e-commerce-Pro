import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from './Service/user-auth.service';

export const AuthMiddlewareGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserAuthService);
  const router = inject(Router);
  if (authService.isAuthenticated) {
    return true;
  } else {
    alert('You must be logged in first');
    router.navigate(['/Login']);
    return false;
  }
};
