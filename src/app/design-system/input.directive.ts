import { Directive, HostBinding } from '@angular/core';
import clsx from 'clsx';

@Directive({
  selector: '[appInput]',
  standalone: true,
})
export class InputDirective {
  @HostBinding('class')
  get additionalClasses() {
    return clsx({
      'w-[288px] h-11 placeholder:pl-4 placeholder:py-3 rounded-xl border border-solid':
        true,
    });
  }

  constructor() {}
}
