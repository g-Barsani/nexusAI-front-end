
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { BodyComponent } from './body/body.component';
import { MainComponent } from './main/main.component';



import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: MainComponent},
    {path: 'register', component: RegisterComponent},


    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect empty path to login
];



