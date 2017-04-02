import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  public static readonly TOTAL_PAGINAS_PADRAO: number = 20;
  public static readonly PAGINA_PADRAO: number = 1;
  public static readonly REGISTRO_PADRAO: number = 0;
  public static readonly ADJACENTES_PADRAO: number = 10;

  //@Input() selectedFirstPage: boolean;
  @Input() qtdPorPagina: number;
  @Input() totalRegistros: number;
  @Input() qtdAdjacentes: number;
  @Output() paginaSelecionada: EventEmitter<number> = new EventEmitter<number>();

  pagina: number;
	paginas: Array<number>;
	exibirProximo: boolean;
	qtdPaginas: number;

  constructor(private route: ActivatedRoute) {
    //console.log('aginacao')
    
   }

  ngOnInit() {
    this.qtdAdjacentes = this.qtdAdjacentes || PaginacaoComponent.ADJACENTES_PADRAO;
    this.qtdPorPagina = this.qtdPorPagina || PaginacaoComponent.TOTAL_PAGINAS_PADRAO;
    this.pagina = +this.route.snapshot.params['pagina'] || PaginacaoComponent.PAGINA_PADRAO;
    this.totalRegistros = this.totalRegistros || PaginacaoComponent.REGISTRO_PADRAO;
    
    this.gerarLinks();
    
  }

  ngOnChanges(){
    //alert(this.totalRegistros);
    this.paginar(1);
  }

  gerarLinks(){
    this.qtdPaginas = Math.ceil(this.totalRegistros / this.qtdPorPagina);
    this.exibirProximo = this.qtdPaginas !== this.pagina;
    this.paginas = [];
    let inicialAdjacente = (this.pagina - this.qtdAdjacentes <= 0) ? 1 : (this.pagina - this.qtdAdjacentes);
    let fimAdjacente = (this.pagina + this.qtdAdjacentes >= this.qtdPaginas) ? this.qtdPaginas : (this.pagina + this.qtdAdjacentes);
    for(let i =  inicialAdjacente; i <= fimAdjacente; i++)
      this.paginas.push(i);
  }

  paginar(pagina: number){
    //$event.preventDefault();
    this.pagina = pagina;
    this.paginaSelecionada.emit(pagina);
    this.gerarLinks();
    //alert('agina');
  }
}
