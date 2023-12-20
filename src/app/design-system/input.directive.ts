import { Directive, HostBinding } from '@angular/core';
import clsx from 'clsx';

@Directive({
  selector: '[appInput]',
  standalone: true
})
export class InputDirective {

  @HostBinding('class')
  get additionalClasses(){
    return clsx({
      'w-[288px] h-11 placeholder:pl-4 placeholder:py-3 rounded-xl border disabled:bg-[#FAF2F3] border border-solid disabled:border-red-500 enabled:bg-[#F8FFF8] enabled:border-[#14D81C] active:bg-[#F7F7FF] active:border-[#5D37F3]' : true
    })
  }

  constructor() { }

}
