import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';  // componente do PrimeNg --input text --
import { FormsModule } from '@angular/forms'; // 

@Component({
  selector: 'app-prompt-bar',
  imports: [ InputTextModule, FormsModule ],
  templateUrl: './prompt-bar.component.html',
  styleUrl: './prompt-bar.component.css'
})
export class PromptBarComponent {
  value: string = '';
}
