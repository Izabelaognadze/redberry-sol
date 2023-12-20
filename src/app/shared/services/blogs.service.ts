import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  url = 'https://api.blog.redberryinternship.ge/api/blogs';

  constructor() { private http : HttpClient}

  getAllBlogs(){
    return this.http.get<Blogs
  }
}
