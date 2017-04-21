import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'input[mascara]'
})
export class MascaraDirective {

  
private options = [{tipo: "cpf", formato: "000.000.000-00", tamanho: 13},
                   {tipo: "rg", formato: "00.000.000-0", tamanho: 11}];

private valor: string = "";
private count = -1;
private formato: string = "";
private legth = 0;

  constructor() {
    this.formato = this.options[0].formato;
    this.legth = this.options[0].tamanho;
  }


  @HostListener('keydown', ['$event'])
  keyup($event: any){
      
      if(this.count == this.legth && $event.keyCode != 8 ){
        return;

      }
      if($event.keyCode == 8 && this.count >= 0){
      this.count--;
      if (this.formato[this.count] != '0' && this.count > 0){
        let t = $event.target.value.length;
        let texto = $event.target.value;
        $event.target.value = texto.substring(0, t-1);
        this.count--;
        //console.log('certo');
      }

      } else if($event.keyCode != 8 && $event.keyCode != 9) {  
      
      this.valor = $event.target.value; 
      this.count++;
      this.aplicar($event);
      }   
      //console.log(this.count);
  }

  @HostListener('blur', ['$event'])
  validar($event: any){
    if(this.count < this.legth){
      $event.target.value = "";
      this.count = -1;
      //console.log(this.count);
    }
  }

  @HostListener('focus', ['$event'])
  entrar($event: any){
    if ($event.target.value.length == this.legth+1){
      this.count = this.legth;
    }
  }

 @HostBinding('value') get setValor(){
    //console.log(this.valor);
   return this.valor;
 }

  private aplicar($event){

    if(this.formato[this.count] != '0'){
      console.log(this.formato[this.count]);
      this.valor += this.formato[this.count];
      this.count++;

    }
  }
}
