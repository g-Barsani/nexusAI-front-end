import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  usuarioData = {
      username: '',
      password: '', 
      email: ''
    };
  
  confirm_password = ''

  constructor(private router: Router, private authService: AuthService) { }

  onSignUp() {

    if (this.confirm_password != this.usuarioData.password) {
      alert("Senha não é igual ao campo de confirmar senha")

    } else {
        // Chama o método cadastrar do AuthService
        this.authService.cadastrar(this.usuarioData).subscribe({
          next: (res) => {
            console.log('Cadastro OK', res);

            
            alert("Cadastro realizado com sucesso (:");

            this.irParaLogin();
          },
          error: (err) => {
            alert("Erro ao cadastrar")
            console.error('Erro ao cadastrar', err);
            // mostrar toast ou erro pro usuário
          }
        });
    }     
  }


  irParaLogin(){
    this.router.navigate(['/login']);
 }
}
