import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Hightlight]'
})
export class HightlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'skyblue';
   }

}
