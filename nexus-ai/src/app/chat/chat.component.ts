
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterViewChecked } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ChatMessage, ChatSessionService } from '../services/chatsession.service';
import { ChatService, ChatBody } from '../services/chat.service';
import { MarkdownModule } from 'ngx-markdown';
import { jwtDecode } from 'jwt-decode';


interface CustomJwtPayload {
    username?: string;
    email?: string;
  }
@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, MarkdownModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('messagesContainer') private chatContainer!: ElementRef
  messages: ChatMessage[] = [];
  userInput: string = '';
  @Output() firstMessage = new EventEmitter<void>();
  hasSentFirstMessage = false;
  modalAberto = false;
  chatSessionId?: number

  chatMsg: ChatBody = {
    content: '',
      model: ''
  }

  isLoading: boolean = false

  selectedValue: string = 'deepseek/deepseek-r1-0528-qwen3-8b:free';


  decoded: CustomJwtPayload = {}
    decode() {
          const token = localStorage.getItem('authToken');
      
          if (token) {
            this.decoded.email = jwtDecode<CustomJwtPayload>(token).email
            this.decoded.username = jwtDecode<CustomJwtPayload>(token).username
          }
        }
  

      

  

  constructor(private chasessionService: ChatSessionService, private chatService: ChatService ) {}

  sendMessage() {
    const trimmed = this.userInput?.trim();
    if (!trimmed) return;
    this.chatMsg.model = this.selectedValue
    this.chatMsg.content = trimmed

    if (!this.hasSentFirstMessage && !this.chatSessionId) {
      this.chasessionService.createChat("Nova Conversa").subscribe({
        next: (resp) => {
              this.chatSessionId = resp.id 

              

              this.chatAiRequest(this.chatMsg, this.chatSessionId)
              // this.sidebar.getAllUserChat()
        },
        error: (err) => {
          alert("Erro ao criar nova conversa: " + err)
        }
      })

      

      this.hasSentFirstMessage = true;
    }



    this.chatAiRequest(this.chatMsg, this.chatSessionId)
    this.userInput = '';
  }


  chatAiRequest(chatBody: ChatBody, sessionId?: number){

    this.isLoading = true

     this.chatService.chatSimple(chatBody, sessionId).subscribe({
      next: (resp) => {
        this.isLoading = false
        this.scrollToBottom()
        console.log(resp)
        
        console.log(chatBody)


        this.getAllChatMessage(this.hasSentFirstMessage, sessionId)
      },
      error: (err) => {
        this.isLoading = false
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
      this.scrollToBottom();
  }

  getAllChatMessage(isFirst: boolean, id?: number) {
      if (isFirst) this.firstMessage.emit();

      this.chasessionService.getMessageChat(id).subscribe({
        next: (messages) => this.messages = messages,
        error: (err) => console.error('Error:', err)
      });


      this.scrollToBottom()
  }
  
  onKeydown(event: any){
      event.preventDefault();
    }


  ngOnInit() {
    this.decode()
      this.chasessionService.selectedItemId$.subscribe(id => {
        this.getAllChatMessage(true, id);
        this.chatSessionId = id
      });
      this.scrollToBottom()
  }

  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

}
