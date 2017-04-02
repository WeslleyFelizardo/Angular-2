import { CursoService } from './../curso.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Curso } from './../Curso';

@Component({
  selector: 'curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListaComponent implements OnInit {

  //teste: Curso;
  qtdPorPagina: number = 1;
  cursosPaginados: Curso[] = [];
  cursos: Curso[] = [];
  showButtonUpdate = new EventEmitter<boolean>();
  cursoSelected: Curso = new Curso();
  idForDelete: number;
  totalRegistros: number = 2;
  //delete: boolean = false;
  constructor(private cursoService: CursoService, private activatedRoute: ActivatedRoute, private router: Router, ) {
    
   }

  loadingCursos(){
     this.cursoService.getAll().subscribe( data => this.cursos = data,
                                            error => console.log(error)); 
     //this.paginar(1);
     //this.totalRegistros = 2;//this.cursos.length;
     //this.cursosPaginados = ;
     //console.log('listando'); 
  }

  a(){
    console.log(this.cursos);
  }

  ngOnInit() { 
      this.loadingCursos();
  } 

  showCurso($event){
    alert($event);
    this.cursoService.getById(parseInt($event)).subscribe(data =>  this.cursoSelected = data);
    // alert(this.cursoSelected);
  }

  fechar(){
    this.router.navigate(['/curso']);
  }

   deleteCurso(){
        this.cursoService.deleteCurso(this.idForDelete).subscribe(data => this.router.navigate(['/curso']),
                                                                  error => console.log(error));
   }

   onClickExcluir(id: number){
    this.idForDelete = id;
   }

   paginar($event){
     this.cursosPaginados = [];
     let paginaAtual = $event - 1;
     for(let i = (paginaAtual * this.qtdPorPagina) ; i < (paginaAtual * this.qtdPorPagina + this.qtdPorPagina) ; i++){
       if(i >= this.cursos.length){
         break;
       }
       this.cursosPaginados.push(this.cursos[i]);
      // console.log(this.cursosPaginados[i]);
     }
   }
}
