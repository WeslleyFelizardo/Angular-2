import { Curso } from './../../curso/Curso';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Aluno } from '../aluno';
import { Router, ActivatedRoute} from '@angular/router';
import { AlunoService } from './../aluno.service';
import { CursoService } from './../../curso/curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aluno-formulario',
  templateUrl: './aluno-formulario.component.html',
  styleUrls: ['./aluno-formulario.component.css']
})
export class AlunoFormularioComponent implements OnInit {

  private aluno = new Aluno();
  private alunoForm: FormGroup;
  private id: number;
  private insert: boolean = true;
  private cursos: any[] = [];

    constructor(private cursoService: CursoService, private activatedRoute: ActivatedRoute, private alunoService: AlunoService , private route: Router
    , private fb: FormBuilder) {
    //this.cursos = this.cursoService.getCursos();
    this.buildForm(fb);
   }

   buildForm(fb: FormBuilder){
    this.alunoForm = fb.group({
      codigo: ['', Validators.required],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      curso: ['', Validators.required] 
    });
   }

   ngOnInit() {
    
    this.activatedRoute.params.subscribe(
      (params: any) => {
        if(params['id'] != null){
        this.id = params['id'];
        this.aluno; //this.alunoService.getAlunoById(this.id);
        //this.alunoAtual = this.id;
        this.alunoForm.controls['codigo'].setValue(this.aluno.id);
        this.alunoForm.controls['nome'].setValue(this.aluno.nome);
        this.alunoForm.controls['cpf'].setValue(this.aluno.cpf);
        this.alunoForm.controls['curso'].setValue(this.aluno.curso.id);
        }
      }
    );

    this.activatedRoute.queryParams.subscribe(
      (queryParams: any) => {
        var acao = queryParams['ope'];
        if(acao == 'novo')
          this.insert = true;
        else{
          this.insert = false;
          this.alunoForm.controls['codigo'].disable();
        }
      }
    );
  }

  insertAluno(){
    
    this.aluno.id = parseInt(this.alunoForm.controls['codigo'].value);
    this.aluno.nome = this.alunoForm.controls['nome'].value;
    this.aluno.cpf = this.alunoForm.controls['cpf'].value;
    this.aluno.curso = this.alunoForm.controls['curso'].value;

    let curso: any;//this.cursoService.getCursoById(this.aluno.idCurso);
    
  //   if(this.cursoService.getCountByCurso(curso.id) < curso.limiteVagas)
  //   {
  //      if(this.alunoService.insertAluno(this.aluno)){
  //        alert('aluno cadastrado com sucesso');
  //        this.route.navigate(['/aluno']);
  //        this.insert = true;
  //     }
  //  }
  //   else{
  //     alert('O curso ' + curso.nome + ' não tem vagas disponivel');
  //   }
   }

  updateAluno(){

    let id = parseInt(this.alunoForm.controls['codigo'].value);
    let nome = this.alunoForm.controls['nome'].value;
    let cpf = this.alunoForm.controls['cpf'].value;
    let idCurso = this.alunoForm.controls['curso'].value;

    let curso: Curso;//this.cursoService.getCursoById(idCurso);
    //alert(this.aluno.idCurso + idCurso);  
    // if(this.cursoService.getCountByCurso(curso.id) < curso.limiteVagas || this.aluno.idCurso == idCurso)
    // {
    //      this.aluno.id = id;
    //      this.aluno.nome = nome;
    //      this.aluno.cpf = cpf;
    //      this.aluno.idCurso = idCurso;
    //     if(this.alunoService.updateAluno(this.aluno)){
    //       alert('aluno atualizado com sucesso');
    //       this.route.navigate(['/aluno']);
    // }
    // }else{
    //      alert('O curso ' + curso.nome + ' não tem vagas disponivel');
    // }
  }

  voltar(){
    this.route.navigate(['/aluno']);
  } 
}
