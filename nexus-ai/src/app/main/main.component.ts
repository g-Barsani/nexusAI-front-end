import { Component } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';
import { PromptBarComponent } from '../prompt-bar/prompt-bar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  imports: [ HeaderComponent, BodyComponent, PromptBarComponent, SidebarComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {

}
