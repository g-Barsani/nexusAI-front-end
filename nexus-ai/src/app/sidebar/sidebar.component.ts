import { Component, Output } from '@angular/core';
import { HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { ChatSession, ChatSessionService } from '../services/chatsession.service';
import { error } from 'console';




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


  chatSessionList: Array<ChatSession> = [];


  constructor(private _eref: ElementRef, private chasessionService: ChatSessionService) { }

  // Listen for click events on the entire document
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this._eref.nativeElement.contains(event.target) && this.isExpanded) {
      this.isExpanded = false;
    }
  }

  onItemClick(id: number) {
    this.chasessionService.selectItem(id); // notifica o outro componente
  }


  ngOnInit() {
        this.getAllUserChat()

  }

  getAllUserChat() {
    this.chasessionService.getAllChats().subscribe({
        next: (response) => {
          this.chatSessionList = response

          console.log('Chats: ', this.chatSessionList)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }


  delete(id: number) {
    let text = "Deseja escluir o chat " + id + " mesmo?"
    console.log(text)

    if (confirm(text) == true) {
        this.chasessionService.deleteChat(id).subscribe({
          next: () => {
            this.getAllUserChat()
          },
          error: (err) => {
            console.log(err)
          }
        })
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

