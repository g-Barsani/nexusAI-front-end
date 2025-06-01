import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nome: string = "";
  email: string = "";
  senha: string = "";

  constructor(private router: Router) { }

  onSignUp(event: Event) {
    event.preventDefault();

    if (this.nome?.trim() === "" || this.email?.trim() === "" || this.senha?.trim() === "") {
      alert("Preencha todos os campos seu burro!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(this.email)) {
      alert("Por favor, insira um email válido");
      return;
    }
    alert("Cadastro realizado com sucesso (:");

  }
  irParaLogin(){
  this.router.navigate(['/login']);
 }
}
