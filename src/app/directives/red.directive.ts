import {Directive, ElementRef, HostBinding, HostListener, inject} from "@angular/core";

@Directive({
  selector: '[changeColor]',
  standalone: true,
})
export class RedDirective {
  private readonly elementRef = inject(ElementRef);
  color = ''

  @HostBinding('style.background') get testing() {
    return this.color
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.color = '';
  }

}