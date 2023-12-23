import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonDirective } from '../../design-system/button.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
