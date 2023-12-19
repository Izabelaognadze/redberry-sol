import { Component, OnInit } from '@angular/core';
import { Selector } from '../../shared/modals/selector';
import { SelectorService } from '../../shared/services/selector.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent implements OnInit{
  selector : Selector[] = []
  loading = true;

  constructor (private selectorButtonService : SelectorService){ }

  ngOnInit(): void {
    this.selectorButtonService.getAllSelectors().subscribe((d) => {
      this.loading = false;
      this.selector = d;
    });
  }
}
