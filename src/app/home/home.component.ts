import { Component } from '@angular/core';
import { ButtonDirective } from '../design-system/button.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonDirective ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
