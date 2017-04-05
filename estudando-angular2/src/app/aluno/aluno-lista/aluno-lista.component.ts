import { Curso } from './../../curso/Curso';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoService } from './../../curso/curso.service';
import { AlunoService } from './../aluno.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Aluno } from './../aluno';

@Component({
  selector: 'aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})
export class AlunoListaComponent implements OnInit {

  cursos: Curso[] = [];
  qtdPorPagina: number = 3;
  alunoPaginados: Aluno[];
  alunos: Aluno[] = [];
  showButtonUpdate = new EventEmitter<boolean>();
  alunoSelected: Aluno = new Aluno();
  idForDelete: number;
  totalRegistros: number = 0;
  cursoAlunoSelected: String;

  constructor(private cursoService: CursoService, private alunoService: AlunoService, private activatedRoute: ActivatedRoute, private router: Router) {
       //this.alunoSelected = new Aluno();
   }

  getAllCursos(){
      this.cursoService.getAll().subscribe(data =>  console.log(data),
                                           error =>  console.log(error));
   }

  //  a(data){
  //     this.alunos = data;
  //  }

  loadingAlunos(){
   this.alunoService.getAll().subscribe(data => this.alunos  = data,
   error => console.log(error)); 
   //this.getAllCursos();
   
   // this.totalRegistros = this.alunos.length;
    //this.paginar(1);
    
    //this.alunoPaginados = this.alunos;
  }

  ngOnInit() {
    this.loadingAlunos();
   
  }

  // testeAluno(){
  //    this.getAllAlunos();
  // }

  fechar(){
    this.router.navigate(['/aluno']);
  }

   deleteAluno(){
        this.alunoService.deleteAluno(this.idForDelete);
        this.router.navigate(['/aluno']);
        this.loadingAlunos();
   }

   onClickExcluir(id: number){
    this.idForDelete = id;
   }

   paginar($event){
     this.alunoPaginados = [];
     let paginaAtual = $event - 1;
     for(let i = (paginaAtual * this.qtdPorPagina) ; i < (paginaAtual * this.qtdPorPagina + this.qtdPorPagina) ; i++){
       if(i >= this.alunos.length){
         break;
       }
       this.alunoPaginados.push(this.alunos[i]);
     }
   }

   showAluno($event){
     this.alunoService.getAlunoById(parseInt($event)).subscribe(data => {
                                                                        this.alunoSelected = data;
                                                                        this.cursoAlunoSelected = this.alunoSelected['Curso'].nome;
                                                                        }, 
                                                                        error => console.log('dsds'));
     //console.log($event);
   }
}
