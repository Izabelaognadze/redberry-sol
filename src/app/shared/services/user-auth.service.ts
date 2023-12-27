import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Email } from '../modals/email';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string }) {
    return this.http
      .post<Email>(
        'https://api.blog.redberryinternship.ge/api/login',
        JSON.stringify(credentials),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe(
        tap((response) => {
          localStorage.setItem('access_email', response.email);
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/']);
        })
      );
  }
}
