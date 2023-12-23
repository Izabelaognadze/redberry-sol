import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../design-system/button.directive';
import { InputDirective } from '../design-system/input.directive';
import { SelectorComponent } from '../design-system/selector/selector.component';
import { Blog } from '../shared/modals/blogs'
import { BlogsService } from '../shared/services/blogs.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonDirective, InputDirective , SelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  items : Blog[] = []

  constructor( private blogsService : BlogsService, private router: Router) { }

  ngOnInit(): void {
    this.blogsService.getAllBlogs().subscribe((d) => {
      this.items = d;
      this.blogsService.setItems(this.items);

      this.items.forEach((blog) => {
        console.log(blog);
      });
    })
  }

  viewBlog(id: number) : void {
    this.router.navigate(['/blog', id]);
  }
}
