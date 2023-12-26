import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../modals/blogs';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private url = 'https://api.blog.redberryinternship.ge/api/blogs';

  constructor(private http: HttpClient) {}

  private itemsSubject = new BehaviorSubject<Blog[]>([]);
  items$ = this.itemsSubject.asObservable();

  setItems(items: Blog[]): void {
    this.itemsSubject.next(items);
  }

  getAllBlogs(): Observable<Blog[]> {
    const url = `${this.url}`;

    const headers = {
      Authorization:
        'Bearer 29e4868f074b41fca2f9fcdfda7b2d1db28ea3354b8226e3f18b298116cb22c6',
    };

    return this.http
      .get<{ data: Blog[] }>(url, { headers })
      .pipe(map((response) => response.data));
  }

  public findBlogById(id: number) {
    return this.http.get<Blog[]>(this.url, {
      params: new HttpParams().set('id', id),
    });
  }
}
