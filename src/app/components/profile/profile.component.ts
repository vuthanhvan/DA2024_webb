import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileService } from '../../core/services/profile.service';
import { AlertController, LoadingController } from '@ionic/angular/standalone';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
// import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule, ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profile: any = {};
  loading: HTMLIonLoadingElement | null = null;
  errorMessage: string | null = null;

  constructor(
    private profileService: ProfileService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  async ionViewWillEnter() {
    this.fetchProfile();
    console.log(1232);
  }

  async fetchProfile() {
    this.presentLoading();
    try {
      const response = await firstValueFrom(this.profileService.getProfile());
      this.profile = response;
    } catch (error) {
      this.errorMessage = 'Error fetching profile.';
      console.error('Profile fetch error:', error);
    } finally {
      this.loading?.dismiss();
      this.loading = null;
    }
  }

  // Helper functions for loading indicator and alerts
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 5000, // Optional timeout
    });
    await this.loading.present();
  }

  async showErrorAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
