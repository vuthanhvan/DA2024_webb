import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-web-public',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
   ],
  templateUrl: './web-public.component.html',
  styleUrl: './web-public.component.scss'
})
export class WebPublicComponent {

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

   // set the currenr year
   year: number = new Date().getFullYear();
   currentSection: any = 'home';
 
   // Timeline config
   slideConfig = {
     slidesToShow: 4,
     slidesToScroll: 1,
     arrows: false,
     dots: true
   };
   // Team config
   config = {
     slidesToShow: 4,
     slidesToScroll: 1,
     arrows: false,
     dots: false
   };
   // About config
   aboutConfig = {
     slidesToShow: 4,
     slidesToScroll: 1,
     arrows: false,
     dots: false
   };
 
 
  //  private _trialEndsAt: string;
 
  //  private _diff: number;
  //  _days: number;
  //  _hours: number;
  //  _minutes: number;
  //  _seconds: number;
 
   constructor() {
 
   }
 
   ngOnInit() {
    //  this._trialEndsAt = "2023-12-31";
 
    //  interval(3000).pipe(
    //    map((x) => {
    //      this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
    //    })).subscribe((x) => {
    //      this._days = this.getDays(this._diff);
    //      this._hours = this.getHours(this._diff);
    //      this._minutes = this.getMinutes(this._diff);
    //      this._seconds = this.getSeconds(this._diff);
    //    });
   }
 
  //  getDays(t) {
  //    return Math.floor(t / (1000 * 60 * 60 * 24));
  //  }
 
  //  getHours(t) {
  //    return Math.floor((t / (1000 * 60 * 60)) % 24);
  //  }
 
  //  getMinutes(t) {
  //    return Math.floor((t / 1000 / 60) % 60);
  //  }
 
  //  getSeconds(t) {
  //    return Math.floor((t / 1000) % 60);
  //  }
 
   ngOnDestroy(): void {
     // this.subscription.unsubscribe();
   }
   /**
    * Window scroll method
    */
   windowScroll() {
     const navbar = document.getElementById('navbar');
    //  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    //    navbar.classList.add('nav-sticky')
    //  } else {
    //    navbar.classList.remove('nav-sticky')
    //  }
   }
 
   /**
    * Toggle navbar
    */
  //  toggleMenu() {
  //    document.getElementById('topnav-menu-content').classList.toggle('show');
  //  }
 
   /**
    * Section changed method
    * @param sectionId specify the current sectionID
    */
   onSectionChange(sectionId: string) {
     this.currentSection = sectionId;
   }

 
  
}
