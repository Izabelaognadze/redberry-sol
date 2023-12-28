import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InputDirective } from '../../design-system/input.directive';
import { ButtonDirective } from '../../design-system/button.directive';
import { UserAuthService } from '../../shared/services/user-auth.service';
import { Email } from '../../shared/modals/email';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, InputDirective, ButtonDirective, ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  isVisible = false;
  emails: Email[] = [];

  form = new FormGroup({
    email: new FormControl('', Validators.required),
  });

  get email() {
    return this.form.get('email');
  }

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  constructor(
    private userAuthService: UserAuthService,
    private fb: FormBuilder
  ) {}

  isEmailInArray(emailValue: string | null): boolean {
    if (emailValue !== null) {
      return this.emails.some((email) => email.email === emailValue);
    }
    return false;
  }
}
