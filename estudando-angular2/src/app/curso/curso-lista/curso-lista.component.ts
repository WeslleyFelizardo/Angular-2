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


  qtdPorPagina: number = 3;
  cursosPaginados: Curso[];
  cursos: Curso[] = [];
  showButtonUpdate = new EventEmitter<boolean>();
  cursoSelected: Curso = new Curso();
  idForDelete: number;
  totalRegistros: number;
  ammount: String;
  show: boolean = true;
  
  constructor(private cursoService: CursoService, private activatedRoute: ActivatedRoute, private router: Router) {
    
   }

  loadingCursos(){
     this.cursoService.getAll().subscribe( data => {this.cursos = data;
                                          
                                          this.totalRegistros = this.cursos.length;
                                          this.paginar(1);
                                          //this.ammountEachCurso(2);
                                          },
                                            error => console.log(error)); 
     
  }

  ngOnInit() { 
      this.loadingCursos();
      
  }

   ammountEachCurso(id: number){
       
     this.cursoService.returnAmmountAlunosByCurso(id).subscribe(data => { 
        
       this.ammount = data['ammount'];
      // alert(this.ammount);
       });
    
   }

  showCurso($event){
    //alert($event);
    this.cursoService.getById(parseInt($event)).subscribe(data =>  this.cursoSelected = data);
    //alert(this.cursoSelected);
  }

  teste(){
    this.show = !this.show;
  }

  fechar(){
    this.router.navigate(['/curso']);
  }

  deleteCurso(){
        this.cursoService.deleteCurso(this.idForDelete).subscribe(data => {
          if(data == "true")
            this.loadingCursos();
          else{
            alert("Não foi possivel excluir este curso, ainda existem alunos matriculados!");
            
          }
        },
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
       //console.log(this.cursos[i].id);
       //this.ammountEachCurso(this.cursos[i].id);
       //this.ammountEachCurso(this.cursos[i].id);
     }
   }
}
