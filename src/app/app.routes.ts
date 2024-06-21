import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { WebPublicComponent } from './components/web-public/web-public.component';


export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'login', // Redirect to login by default
    //     pathMatch: 'full',
    //   },
    {
          path: '',
          redirectTo: 'webpublic',
          pathMatch: 'full',
        },
    {
      path: 'webpublic',
      loadComponent: () =>
        import('./components/web-public/web-public.component').then(
          (m) => m.WebPublicComponent
        ),
    },
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./components/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./components/profile/profile.component').then(
            (m) => m.ProfileComponent
          ),
        canActivate: [authGuard], // Protect the profile route with AuthGuard
      },
      {
        path: 'edit-profile',
        loadComponent: () =>
          import('./components/edit-profile/edit-profile.component').then(
            (m) => m.EditProfileComponent
          ),
        canActivate: [authGuard],
      },
     
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      // {
      //   path: 'webpublic',
      //   loadComponent: () =>
      //     import('./web-public/web-public.component').then(
      //       (m) => m.WebPublicComponent
      //     ),
      // }

];
