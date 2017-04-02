import { Directive, Input , HostListener} from '@angular/core';
import {  } from '@angular/forms';

@Directive({
  selector: '[mascara]'
})
export class MascaraDirective {

  @Input() tipoMascara;

  

}
