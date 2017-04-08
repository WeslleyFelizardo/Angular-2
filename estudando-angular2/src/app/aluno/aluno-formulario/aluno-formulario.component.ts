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

  private aluno;
  private alunoForm: FormGroup;
  private id: number;
  private insert: boolean = true;
  private cursos: Curso[] = [];
  private alunoUpdate: Aluno;
  selectedValue = "-1";

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

  showUpdate(aluno: Aluno){
        this.alunoForm.controls['codigo'].setValue(aluno.id);
        this.alunoForm.controls['nome'].setValue(aluno.nome);
        this.alunoForm.controls['cpf'].setValue(aluno.cpf);
       // this.alunoForm.controls['curso'].setValue(aluno['Curso'].descricao);
        this.selectedValue = aluno['Curso'].id;
  }

   ngOnInit() {
    
    this.activatedRoute.params.subscribe(
      (params: any) => {
        if(params['id'] != null){
        this.id = params['id'];
        this.alunoService.getAlunoById(this.id).subscribe(data => this.showUpdate(data));
      
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

    this.cursoService.getAll().subscribe(data => this.cursos = data);
  }

  insertAluno(){
    let newCurso = this.cursos.find(course => course.id == this.alunoForm.controls['curso'].value);
    //console.log(newCurso);
    this.aluno = new Aluno(parseInt(this.alunoForm.controls['codigo'].value),  this.alunoForm.controls['nome'].value,  this.alunoForm.controls['cpf'].value,
    newCurso); 

    console.log(this.aluno);
   }

  updateAluno(){

    let id = parseInt(this.alunoForm.controls['codigo'].value);
    let nome = this.alunoForm.controls['nome'].value;
    let cpf = this.alunoForm.controls['cpf'].value;
    let cursoUpdate: Curso;
    cursoUpdate = this.cursos.find(course => course.id == this.alunoForm.controls['curso'].value);
    
    this.alunoUpdate = new Aluno(id, nome, cpf, cursoUpdate);
    
    this.alunoService.updateAluno(this.alunoUpdate).subscribe(data => {this.route.navigate(['/aluno']); console.log(data);},
                                                              error => console.log(error));
  }

  voltar(){
    this.route.navigate(['/aluno']);
  } 
}
