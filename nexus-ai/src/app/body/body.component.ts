import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

interface CustomJwtPayload {
    username?: string;
    email?: string;
  }

  

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'] 
})
export class BodyComponent {
    decoded: CustomJwtPayload = {}
  decode() {
        const token = localStorage.getItem('authToken');
    
        if (token) {
          this.decoded.email = jwtDecode<CustomJwtPayload>(token).email
          this.decoded.username = jwtDecode<CustomJwtPayload>(token).username
        }
      }

    ngOnInit(): void {
    this.decode()
  }

  
}

