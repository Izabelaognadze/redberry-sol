import { Component } from '@angular/core';
import { ButtonDirective } from '../design-system/button.directive';
import { InputDirective } from '../design-system/input.directive';
import { SelectorComponent } from '../design-system/selector/selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonDirective, InputDirective , SelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
