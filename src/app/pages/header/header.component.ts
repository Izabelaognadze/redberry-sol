import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ButtonDirective } from '../../design-system/button.directive';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonDirective, LogInComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild(LogInComponent) LogInComponent: LogInComponent | undefined;

  toggleLoginVisibility() {
    if (this.LogInComponent) {
      this.LogInComponent.toggleVisibility();
    }
  }
}
