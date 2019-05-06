import { Directive, ElementRef, HostListener } from '@angular/core';
 
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }
 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('transparent', 'black');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('blue', null);
  }
 
  private highlight(bgcolor: string, color:string) {
    this.el.nativeElement.style.backgroundColor = bgcolor;
    this.el.nativeElement.style.color = color
  }
}