import { inject } from '@angular/core';
import { Router, CanActivateFn} from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { environment } from '../../../environments/environment';


export const authGuard: CanActivateFn = async (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const isLoggedIn = await authService.isLoggedIn();
  
    if (isLoggedIn) {
      return true;
    } else {
      // Optionally, you can store the attempted URL for redirection after login
      // router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      await router.navigateByUrl('/login');
      return false;
    }
  };