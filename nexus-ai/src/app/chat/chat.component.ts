
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterViewChecked } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ChatMessage, ChatSessionService } from '../services/chatsession.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('messagesContainer')
  private messagesContainer!: ElementRef;
  @ViewChild('ultimaMensagem') ultimaMensagem!: ElementRef;
  private rolar = false;
  messages: ChatMessage[] = [];
  userInput: string = '';
  @Output() firstMessage = new EventEmitter<void>();
  hasSentFirstMessage = false;
  modalAberto = false;
  chatSessionId?: number

  constructor(private chasessionService: ChatSessionService) {}

  sendMessage() {
    const trimmed = this.userInput?.trim();
    if (!trimmed) return;

    if (!this.hasSentFirstMessage) {
      this.hasSentFirstMessage = true;
      console.log('Emitting firstMessage event');
      this.firstMessage.emit();
    }

    const userMsg: ChatMessage = { role: 'user', content: trimmed };

    const aiMsg: ChatMessage = {
      role: 'assistant',
      content: 'Test message'
    };

    this.messages.push(userMsg, aiMsg);
    this.rolar = true;

    this.userInput = '';

    setTimeout(() => {
      const textarea = document.querySelector("textarea");
      if (textarea) {
        textarea.style.height = '40px';
      }
    })
  }

  ajustarTextArea(event: Event) {
    const textarea = event?.target as HTMLTextAreaElement | null;

    if (textarea === null) return;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  ngAfterViewChecked(): void {
    if (this.rolar) {
      this.scrool();
      this.rolar = false;
    }
  }

  getAllChatMessage(id: number) {
    this.firstMessage.emit()
    this.chasessionService.getMessageChat(id).subscribe({
        next: (response) => {
          this.messages = response

          console.log('Messages: ', this.messages)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  ngOnInit() {
      this.chasessionService.selectedItemId$.subscribe(id => {
        this.getAllChatMessage(id);
        this.chatSessionId = id
      });
  }

private scrool(): void {
  try {
    const el = this.messagesContainer.nativeElement;
    el.scrollTop = el.scrollHeight;
  } catch (e) {
    console.error("Deu pau no scroll", e);
  }
}

}
