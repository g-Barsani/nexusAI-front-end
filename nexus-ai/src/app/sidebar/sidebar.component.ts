import { Component } from '@angular/core';
import { HostListener, ElementRef } from '@angular/core';
import { ModalConfigComponent } from '../modal-config/modal-config.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  imports: [ModalConfigComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isExpanded = false;
  modalAberto = false;
  constructor(private _eref: ElementRef) {}

    // Listen for click events on the entire document
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this._eref.nativeElement.contains(event.target) && this.isExpanded) {
      this.isExpanded = false;
    }
  }
  abrirModal(){
    this.modalAberto = true;
  }

  toggleSidebar(){
    this.isExpanded = !this.isExpanded;
  }
}

