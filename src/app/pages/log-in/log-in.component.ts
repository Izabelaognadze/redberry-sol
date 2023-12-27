import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InputDirective } from '../../design-system/input.directive';
import { ButtonDirective } from '../../design-system/button.directive';
import { UserAuthService } from '../../shared/services/user-auth.service';
import { Email } from '../../shared/modals/email';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, InputDirective, ButtonDirective],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent implements OnInit {
  isVisible = false;
  emails: Email[] = [];

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  constructor(private userAuthService: UserAuthService) {}

  ngOnInit(): void {
    this.userAuthService.getAllEmails().subscribe((d) => {
      this.emails = d;
      console.log(this.emails);
    });
  }
}
