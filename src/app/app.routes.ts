import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { LogInComponent } from './pages/log-in/log-in.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog/:id', component: BlogComponent }
];
