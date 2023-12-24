import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private url = 'https://api.blog.redberryinternship.ge/api';

  constructor(private http: HttpClient) { }

  login(email: string): Observable<any> {
    const d = { email: email };
    return this.http.post(`${this.url}/login`, d);
  }

  private isSignedIn = new BehaviorSubject<boolean>(false);
  onSignedIn$ = this.isSignedIn.asObservable();

}
