import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  redirectToHeader() {
    // Here you would typically add your login logic
    // For now, we'll just redirect to header page
    this.router.navigate(['/header']);
  }
}


  

  // goToHeader() {
  //   this.router.navigate(['/header']);
  // }
