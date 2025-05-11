import { Component } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { PromptBarComponent } from './prompt-bar/prompt-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MainComponent} from './main/main.component';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, LoginComponent, HeaderComponent, BodyComponent, 
    PromptBarComponent, SidebarComponent,   MainComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nexus-ai';
}
