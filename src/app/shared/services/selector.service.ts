import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Selector } from '../modals/selector';

@Injectable({
  providedIn: 'root'
})
export class SelectorService {
  url = 'https://api.blog.redberryinternship.ge/api/categories';

  constructor( private http : HttpClient ) { }

  getAllSelectors(){
    return this.http.get<Selector[]>(`${this.url}`)
  }
}
