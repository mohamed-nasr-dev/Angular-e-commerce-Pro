import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appImgStyle]',
})
export class ImgStyleDirective implements OnChanges {
  // property

  default: string = '#eee';
  @Input('appImgStyle') color: string = '10px';
  constructor(private element: ElementRef) {}
  ngOnChanges(): void {
    this.element.nativeElement.style.boxShadow = `0px 0px 2px 2px ${this.default}`;
  }

  // method decorator
  @HostListener('mouseover') hover() {
    this.element.nativeElement.style.boxShadow = `0px 0px 2px 2px ${this.color}`;
    this.element.nativeElement.style.opacity = '.7';
  }
  @HostListener('mouseout') out() {
    this.element.nativeElement.style.boxShadow = `0px 0px 2px 2px ${this.default}`;
    this.element.nativeElement.style.opacity = '1';
  }
}
