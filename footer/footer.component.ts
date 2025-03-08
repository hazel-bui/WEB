import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,  
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isSubscribed = false;

  subscribe(event: Event) {
    event.preventDefault(); // Prevent page reload
    this.isSubscribed = true; // Hide form, show "Thank you"
  }

  socialLinks = [
    { icon: 'facebook', url: '#' },
    { icon: 'instagram', url: '#' },
    { icon: 'tiktok', url: '#' }
  ];

  supportLinks = [
    { name: 'Delivery policy', url: '#' },
    { name: 'Warranty policy', url: '#' },
    { name: 'Privacy policy', url: '#' },
    { name: 'Contact', url: '#' }
  ];
  
}