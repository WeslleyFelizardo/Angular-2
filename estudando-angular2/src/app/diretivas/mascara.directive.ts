import { Directive, Input , HostListener, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[mascara]'
})
export class MascaraDirective {

  //@Input('mascara') tipoMascara;
  constructor(private elementRef: ElementRef, private renderer: Renderer){

  }

  @HostListener('mouseeenter') onMouseOver(){
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }

}
