import { Component } from '@angular/core';

@Component({
  selector: 'app-web-public',
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
  
}
