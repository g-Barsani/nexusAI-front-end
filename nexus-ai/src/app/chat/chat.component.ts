
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { Component, Output, EventEmitter } from '@angular/core';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}



@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: ChatMessage[] = [];
  userInput: string = '';
  @Output() firstMessage = new EventEmitter<void>(); // Make sure this matches
  hasSentFirstMessage = false;

  sendMessage() {
     // Set flag when first message is sent
    if (!this.hasSentFirstMessage) {
      this.hasSentFirstMessage = true;
      console.log('Emitting firstMessage event'); // Add this debug line
      this.firstMessage.emit();
    }


    const trimmed = this.userInput.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { role: 'user', content: trimmed };
    const aiMsg: ChatMessage = { role: 'assistant', content: 'Test message' };  // mudar content dps. Chamar API aqui para buscar a resposta da IA

    this.messages.push(userMsg, aiMsg);
    this.userInput = '';

  }
}
