import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Selector } from '../modals/selector';

@Injectable({
  providedIn: 'root'
})
export class SelectorService {
  url = 'https://api.blog.redberryinternship.ge/api/categories';

  constructor( private http : HttpClient ) { }

  getAllSelectors(): Observable<Selector[]> {
    return this.http.get<{ data: Selector[] }>(`${this.url}`).pipe(
      map(response => response.data)
    );
  }
}
