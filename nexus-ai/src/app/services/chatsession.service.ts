import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatSession {
  id?: number;
  sessionTitle?: string
  createdAt?: Date
}

@Injectable({
    providedIn: 'root',
})
export class ChatSessionService {
    private apiUrl = 'http://localhost:8080/chatSessions'; // URL da sua API de cadastro

    constructor(private http: HttpClient) { }

    getAllChats(){
        return this.http.get<ChatSession[]>(`${this.apiUrl}/list`);
    }


    deleteChat(id: number){
        return this.http.delete(`${this.apiUrl}/delete/${id}`);
    }


    
}
