
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterViewChecked } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ChatMessage, ChatSessionService } from '../services/chatsession.service';
import { ChatService, ChatBody } from '../services/chat.service';

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

  chatMsg = {
    content: '',
      model: ''
  }

  selectedValue: string = 'deepseek/deepseek-r1-0528-qwen3-8b:free';

  constructor(private chasessionService: ChatSessionService, private chatService: ChatService) {}

  sendMessage() {
    const trimmed = this.userInput?.trim();
    if (!trimmed) return;

    if (!this.hasSentFirstMessage) {
      this.chasessionService.createChat("Novo Conversa").subscribe({
        next: (resp) => {
              this.chatSessionId = resp.id

              this.chatMsg.model = this.selectedValue
              this.chatMsg.content = trimmed

              this.chatService.chatSimple(this.chatMsg, this.chatSessionId).subscribe({
                next: () => {
                    this.getAllChatMessage(this.chatSessionId)
                },
                error: (err) => {
                  alert( "ChatSessionId: " + this.chatSessionId +"\n" + "ChatMsg: " + this.chatMsg.content  +"\n" + err)
                }
              })

        },
        error: (err) => {
          alert("Erro ao criar nova conversa: " + err)
        }
      })

      this.hasSentFirstMessage = true;
      console.log('Emitting firstMessage event');
      this.firstMessage.emit();
    }

    // const userMsg: ChatMessage = { role: 'user', content: trimmed };

    // const aiMsg: ChatMessage = {
    //   role: 'assistant',
    //   content: 'Test message'
    // };

    // this.messages.push(userMsg, aiMsg);
    // this.rolar = true;

    this.userInput = '';

    // setTimeout(() => {
    //   const textarea = document.querySelector("textarea");
    //   if (textarea) {
    //     textarea.style.height = '40px';
    //   }
    // })
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

  getAllChatMessage(id?: number) {
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
