import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputDirective } from '../../design-system/input.directive';
import { ButtonDirective } from '../../design-system/button.directive';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, InputDirective, ButtonDirective],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  isVisible = false;

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }
}
