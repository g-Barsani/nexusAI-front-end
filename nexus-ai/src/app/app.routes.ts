
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'header', component: HeaderComponent},

    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect empty path to login
];



