import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent {
  isExpanded = false;

  toggleProfile() {
    this.isExpanded = !this.isExpanded;
  }

  closeProfile() {
    this.isExpanded = false;
  }
}
