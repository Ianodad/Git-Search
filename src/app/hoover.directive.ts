import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoover]'
})
export class HooverDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('mouseover')
  onMouseOver() {
    this.changeBackgroundColor('green');
    this.changeTextColor('white');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeBackgroundColor('white');
    this.changeTextColor('black');
  }
  private changeBackgroundColor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
  private changeTextColor(color: string) {
    this.elRef.nativeElement.style.color = color;
  }
}
