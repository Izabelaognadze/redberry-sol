import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Blog } from '../shared/modals/blogs';
import { BlogsService } from '../shared/services/blogs.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../pages/header/header.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  id?: number = undefined;
  items: Blog[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogsService: BlogsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.blogsService.getAllBlogs().subscribe((d) => {
      this.items = d;
      this.blogsService.setItems(this.items);
    });

    this.activatedRoute.paramMap.subscribe((c) => {
      this.id = +c.get('id')!;
      this.loadBlog();
    });

    this.blogsService.items$.subscribe((d) => {
      this.items = d;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  loadBlog(): void {
    this.items = this.items.filter((item) => item.id === this.id);
  }
}
