import { Component, Output } from '@angular/core';
import { HostListener, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { ChatSession, ChatSessionService } from '../services/chatsession.service';
import { error } from 'console';




@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() fechar = new EventEmitter<void>();
  isExpanded = false;
  modalAberto = false;
  modalAberto2 = false;
  newTitle: string = '';

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
    console.log("Modal aberto :)");
  }
  
    fecharModal() {
      this.modalAberto = false;
    }

  abrirModal2() {
    this.modalAberto2 = true;
    console.log("Modal 2 aberto :)");
  }
  
    fecharModal2() {
      this.modalAberto2 = false;
    }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  salvar() {
    alert("Informações salvas com sucesso!");
    this.modalAberto = false;
  }

  createChat() {

    this.chasessionService.createChat(this.newTitle).subscribe({
      next: () => {
        alert("Informações salvas com sucesso!");
        this.modalAberto2 = false;
        this.getAllUserChat();
      },
      error: (err) => {
        alert("Erro ao cadastrar: " + err);
      }
    })
    
  }
}

