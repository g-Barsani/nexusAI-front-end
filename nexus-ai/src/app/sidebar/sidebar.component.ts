import { Component } from '@angular/core';
import { HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isExpanded = false;

  constructor(private _eref: ElementRef) {}

    toggleSidebar() {
      this.isExpanded = !this.isExpanded;
    }

    // Listen for click events on the entire document
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this._eref.nativeElement.contains(event.target) && this.isExpanded) {
      this.isExpanded = false;
    }
  }
}

