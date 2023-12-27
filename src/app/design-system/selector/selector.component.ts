import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectorService } from '../../shared/services/selector.service';
import { CommonModule } from '@angular/common';
import { Selector } from '../../shared/modals/selector';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css',
})
export class SelectorComponent implements OnInit {
  selector: Selector[] = [];
  @Output() sendSelectorId = new EventEmitter<number[]>();
  @Input() selectorID: number[] = [];

  constructor(private selectorButtonService: SelectorService) {}

  ngOnInit(): void {
    this.selectorButtonService.getAllSelectors().subscribe((d) => {
      this.selector = d;
    });
  }

  categoryClick(id: number) {
    if (!this.selectorID.includes(id)) {
      this.selectorID.push(id);
    } else {
      this.selectorID = this.selectorID.filter((item) => item !== id);
    }

    this.sendSelectorId.emit([...this.selectorID]);
  }
}
