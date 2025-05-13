
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HeaderComponent},
    { path: 'home', component: BodyComponent},

    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect empty path to login
];



