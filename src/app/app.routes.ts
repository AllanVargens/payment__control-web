import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: "home",
        component: HomePageComponent,
        canActivate: [authGuard],
        children: [
            // {
            //     path: 'child-a', // this is the component with the <router-outlet> in the home-component
            //     component: ChildAComponent
            //   }
        ]
    },
    { path: '**', redirectTo: '/login' }
];
