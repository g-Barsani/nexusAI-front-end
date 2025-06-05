import { Component, Output } from '@angular/core';
import { HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() fechar = new EventEmitter<void>();
  isExpanded = false;
  modalAberto = false;
  constructor(private _eref: ElementRef) { }

  // Listen for click events on the entire document
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this._eref.nativeElement.contains(event.target) && this.isExpanded) {
      this.isExpanded = false;
    }
  }
  abrirModal() {
    this.modalAberto = true;
    console.log("Modal aberto chifrudo do caralho");
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  salvar() {
    alert("Informações salvas com sucesso!");
    this.modalAberto = false;
  }
}

