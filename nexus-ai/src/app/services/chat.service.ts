import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChatSession } from './chatsession.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

    private apiUrl = 'http://localhost:8080/'; 


}
