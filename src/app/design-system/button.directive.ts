import { Directive, HostBinding, Input } from '@angular/core';
import { clsx } from 'clsx';

type ButtonVariant = 'button1' | 'button2';

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class ButtonDirective {
  @Input() variant : ButtonVariant = 'button1';

  @HostBinding('class')
  get additionalClasses(){
    return clsx({
      'rounded-lg text-white bg-clr-purple text-sm font-medium leading-5 py-[10px]' : true,
      'w-[288px] disabled:bg-clr-grey' : this.variant === 'button1',
      'px-5' : this.variant === 'button2',
    })
  }

  constructor() { }

}
