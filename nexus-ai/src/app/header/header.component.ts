import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

interface CustomJwtPayload {
    username?: string;
    email?: string;
  }


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent {
  isExpanded = false;

  decoded: CustomJwtPayload = {}
  
  constructor(private router: Router) {}
  
  onFocusOut(event: FocusEvent): void {
    const relatedTarget = event.relatedTarget as HTMLElement;

    // Só fecha se o novo foco estiver fora do profile-wrapper
    if (!relatedTarget || !relatedTarget.closest('.profile-wrapper')) {
      this.closeProfile();
    }
  }


  goHome() {
    console.log("estou funcionando!")
    window.location.reload()
  }

  decode() {
    const token = localStorage.getItem('authToken');

    if (token) {
      this.decoded.email = jwtDecode<CustomJwtPayload>(token).email
      this.decoded.username = jwtDecode<CustomJwtPayload>(token).username
    }
  }

  logout(){
    localStorage.clear()
    this.irParaLogin()
  }


  irParaLogin() {
    this.router.navigate(['login']);
  }
  ngOnInit(): void {
    this.decode()
  }

  toggleProfile() {
    this.isExpanded = !this.isExpanded;
  }

  closeProfile() {
    this.isExpanded = false;
  }
}
