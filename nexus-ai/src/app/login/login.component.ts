import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    constructor(private router: Router, private authService: AuthService) { }

    usuarioData = {
      username: '',
      password: ''
    };

    login() {
        this.authService.login(this.usuarioData).subscribe({
        next: (response) => {
          const token = response.headers.get('Authorization');
          
          if (token) {
                localStorage.setItem('authToken', token.replace('Bearer ', ''));
          }

          this.redirectToHome();
        },
        error: (error) => {
          alert('Erro ao fazer login')
          console.error('Erro ao fazer login', error);
        }
      }
        
      );
    }
    
    redirectToHome() {
      this.router.navigate(['/home']);
    }
    irParaCadastro() {
      this.router.navigate(['/register']);
    }
    irParaLogin() {
      this.router.navigate(['/login']);
    }
}
