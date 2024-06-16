import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import Swal from 'sweetalert2';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
   ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  credentials = {
    username: '',
    password: '',
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    // private alertController: AlertController
  ) {}

  async login() {
    try {
      const response = await firstValueFrom(
        this.authService.login(this.credentials)
      );

      if (response && response.token) {
        // Assuming the API returns a token on successful login
        this.authService.setToken(response.token); // Store the token
        this.router.navigate(['/profile']); // Navigate to protected page
      } else {
        // Handle unexpected API response
        this.confirm();
        // this.showAlert('Error', 'Invalid username or password.');
      }
    } catch (error) {
      this.confirm();
      console.error('Login error:', error);
    }
  }


  confirm() {
    Swal.fire({
      title: 'Error',
      text: 'Login failed. Please try again.',
      icon: 'warning',
    })
  }

}
