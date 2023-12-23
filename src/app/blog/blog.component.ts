import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component'
import { Blog } from '../shared/modals/blogs';
import { BlogsService } from '../shared/services/blogs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  id?: number = undefined;
  items: Blog[] = [];

  constructor( private activatedRoute : ActivatedRoute, private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(c => {
      this.id =+ c.get('id')!;
      this.loadBlog();
    });

    this.blogsService.items$.subscribe((items) => {
      this.items = items;
    });
  }

  loadBlog() : void {

  }
}
