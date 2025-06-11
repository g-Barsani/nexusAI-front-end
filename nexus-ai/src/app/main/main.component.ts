import { Component } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';

import { ChatComponent } from '../chat/chat.component';

import { PromptBarComponent } from '../prompt-bar/prompt-bar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-main',
  imports: [ HeaderComponent, BodyComponent, PromptBarComponent, SidebarComponent, ChatComponent, CommonModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  showBody = true;
  hideBody() {
  this.showBody = false;
}
}
