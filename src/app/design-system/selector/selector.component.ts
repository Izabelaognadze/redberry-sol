import { Component, Input, OnInit } from '@angular/core';
import { SelectorService } from '../../shared/services/selector.service';
import { CommonModule } from '@angular/common';
import { Selector } from '../../shared/modals/selector';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent implements OnInit{
  @Input() public slice: number = 0;
  selector : Selector[] = [];

  constructor (private selectorButtonService : SelectorService){ }

  ngOnInit(): void {
    this.selectorButtonService.getAllSelectors().subscribe((d) => {
      this.selector = d;
    });
  }
}
