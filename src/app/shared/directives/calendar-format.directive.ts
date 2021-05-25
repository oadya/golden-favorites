import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[calendarFormat]'
})
export class CalendarFormatDirective {


  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^0-9/]*/g, '');
    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
