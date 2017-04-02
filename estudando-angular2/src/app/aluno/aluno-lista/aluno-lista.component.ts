import { Curso } from './../../curso/Curso';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoService } from './../../curso/curso.service';
import { AlunoService } from './../aluno.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Aluno } from '../Aluno';

@Component({
  selector: 'aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})
export class AlunoListaComponent implements OnInit {

  cursos: Curso[] = [];
  qtdPorPagina: number = 3;
  alunoPaginados: any;
  alunos: Aluno[] = [];
  showButtonUpdate = new EventEmitter<boolean>();
  alunoSelected: any = {};
  idForDelete: number;
  totalRegistros: number = 0;

  constructor(private cursoService: CursoService, private alunoService: AlunoService, private activatedRoute: ActivatedRoute, private router: Router, ) {
       
   }

    getAllCursos(){
      this.cursoService.getAll().subscribe(data => this.cursos = data);
   }

  loadingAlunos(){
    this.alunoService.getAll().subscribe( data =>
      this.alunos = data,
    error => console.log(error)); 
    //this.getAllAlunos();
    //this.alunos = this.alunoService.getAll();
    this.totalRegistros = this.alunos.length;
    this.paginar(1);
    
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
     this.alunoSelected = this.alunoService.getAlunoById(parseInt($event));
     //console.log($event);
   }
}
