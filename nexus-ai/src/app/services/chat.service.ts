import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChatSession } from './chatsession.service';
import { HttpClient } from '@angular/common/http';

export interface ChatResponse{
  reposta: string
}

export interface ChatBody{
  content: string
  model: string
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

    private apiUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    chatSimple(body: ChatBody, idSession?:  number){
        return this.http.post(`${this.apiUrl}/chatSessions/${idSession}/chatsimple`, body);
    }

    chatContext(body: ChatBody, idSession?:  number){
        return this.http.post(`${this.apiUrl}chatSessions/${idSession}/chatcontext`, body);
    }
}
