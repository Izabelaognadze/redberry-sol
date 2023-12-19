import { Component } from '@angular/core';
import { SelectorComponent } from '../design-system/selector/selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SelectorComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
