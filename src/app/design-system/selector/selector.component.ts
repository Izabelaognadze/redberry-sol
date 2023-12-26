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
  @Input() public slice: number = 0;
  selector: Selector[] = [];
  @Output() sendSelectorID = new EventEmitter<number[]>();
  selectorID: number[] = [];

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

    // console.log(this.aba);

    this.sendSelectorID.emit([...this.selectorID]);
  }
}
