import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-modal-config',
  imports: [],
  templateUrl: './modal-config.component.html',
  styleUrl: './modal-config.component.css'
})
export class ModalConfigComponent {
  @Output() fechar = new EventEmitter<void>();
  email: string = ''
  senha: string = ''

  fecharModal(){
    this.fechar.emit();
  }
  salvar(){
    this.fechar.emit();
    alert("Informacoes salvas com sucesso!");
  }
}