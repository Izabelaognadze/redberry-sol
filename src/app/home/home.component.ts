import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../design-system/button.directive';
import { InputDirective } from '../design-system/input.directive';
import { SelectorComponent } from '../design-system/selector/selector.component';
import { Blogs } from '../shared/modals/blogs'
import { BlogsService } from '../shared/services/blogs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonDirective, InputDirective , SelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  item : Blogs[] = []

  constructor( private blogsService : BlogsService) { }

  ngOnInit(): void {
    this.blogsService.getAllBlogs().subscribe((d) => {
      this.item = d;

      this.item.forEach((blog) => {
        console.log(blog.data);
      });
    })
  }
}
