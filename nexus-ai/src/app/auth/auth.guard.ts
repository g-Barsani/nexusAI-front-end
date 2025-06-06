import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  canActivate(): boolean {


    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');

      if (token) {
        // Usuário autenticado, deixa passar
        return true;
      } else {
        // Não autenticado, redireciona para login
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      return false
    }
  }
}