import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Email } from '../modals/email';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private url = 'https://api.blog.redberryinternship.ge/api/login';

  constructor(private http: HttpClient) {}

  getAllEmails(): Observable<Email[]> {
    const url = `${this.url}`;

    const headers = {
      Authorization:
        'Bearer 29e4868f074b41fca2f9fcdfda7b2d1db28ea3354b8226e3f18b298116cb22c6',
    };

    return this.http
      .get<{ d: Email[] }>(url, { headers })
      .pipe(map((response) => response.d));
  }
}

// login(email: string): Observable<any> {
//   const d = { email: email };
//   return this.http.post(`${this.url}/login`, d);
// }

// private isSignedIn = new BehaviorSubject<boolean>(false);
// onSignedIn$ = this.isSignedIn.asObservable();
