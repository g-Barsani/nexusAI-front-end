import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Subject } from 'rxjs';

export interface ChatSession {
  id?: number ;
  sessionTitle?: string
  createdAt?: Date
}
export interface ChatMessage {
  id?: number ;
  role?: string;
  llmName?: string;
  content?: string;
  timestamp?: Date;
}

@Injectable({
    providedIn: 'root',
})
export class ChatSessionService {
    private apiUrl = 'http://localhost:8080/chatSessions'; // URL da sua API de cadastro

    constructor(private http: HttpClient) { }

    private selectedItemIdSubject = new Subject<number>();
    selectedItemId$ = this.selectedItemIdSubject.asObservable();
    
    selectItem(id: number) {
        this.selectedItemIdSubject.next(id);
    }

    getAllChats(){
        return this.http.get<ChatSession[]>(`${this.apiUrl}/list`);
    }
    createChat(title: string){
        return this.http.post<ChatSession>(`${this.apiUrl}/insert`, title);
    }
    
    getMessageChat(id?: number){
        return this.http.get<ChatMessage[]>(`${this.apiUrl}/${id}/messages`);
    }

    deleteChat(id: number){
        return this.http.delete(`${this.apiUrl}/delete/${id}`);
    }


    
}
