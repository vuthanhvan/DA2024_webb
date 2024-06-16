import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import Swal from 'sweetalert2';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  credentials = {
    username: '',
    password: '',
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    // private alertController: AlertController
  ) {}

  async register() {
    try {
      const response = await firstValueFrom(
        this.authService.register(this.credentials)
      );

      // Successful registration - usually 204 No Content
      // Optionally, display a success message

      this.router.navigate(['/login']); // Navigate to login after registration
    } catch (error) {
      this.confirm();
      console.error('Registration error:', error);
    }
  }
  confirm() {
    Swal.fire({
      title: 'Error',
      text: 'Registration failed. Please check your information.',
      icon: 'warning',
    })
  }
}
