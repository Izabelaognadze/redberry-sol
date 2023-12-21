import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blogs } from '../modals/blogs';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private apiUrl = 'https://api.blog.redberryinternship.ge/api/blogs';

  constructor(private http: HttpClient) {}

  getAllBlogs(): Observable<Blogs[]> {
    const url = `${this.apiUrl}`;

    const headers = {
      Authorization: 'Bearer 29e4868f074b41fca2f9fcdfda7b2d1db28ea3354b8226e3f18b298116cb22c6'
    };

    return this.http.get<{ data: Blogs[]}>(url, { headers }).pipe(
      map(response => response.data)
    );
  }
}
