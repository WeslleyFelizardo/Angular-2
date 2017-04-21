import { AlunoService } from './../../aluno/aluno.service';
import { Curso } from './../Curso';
import { Validators, FormBuilder, AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'curso-formulario',
  templateUrl: './curso-formulario.component.html',
  styleUrls: ['./curso-formulario.component.css']
})
export class CursoFormularioComponent implements OnInit {

  private curso: Curso = new Curso();
  private cursoAtual: Curso = new Curso();
  private id: number = 0;
  private insert: boolean = true;
  cursoForm: FormGroup;
  

  constructor(private activatedRoute: ActivatedRoute, private cursoService: CursoService, private route: Router, 
  private fb: FormBuilder
   )
   {
      
      this.buildForm(fb);
     }

   buildForm(fb: FormBuilder){
        this.cursoForm = fb.group({
        codigo: [''],
        nome: ['', Validators.required],
        descricao: ['', Validators.required],
        limiteDeVagas: ['', Validators.required]
      });
   }

  // hasErrors(): string {
	// 	var hasErrors: string = '';
	// 	for(var controlName in this.cursoForm.controls) {
	// 		var control: AbstractControl = this.cursoForm.controls[controlName];
	// 		if(!control.valid && !control.pristine) {
	// 			hasErrors = controlName;
	// 			break;
	// 		}
	// 	}
	// 	return hasErrors;
	// }
  showUpdate(curso: Curso){
        this.cursoForm.controls['codigo'].setValue(curso.id);
        this.cursoForm.controls['nome'].setValue(curso.nome);
        this.cursoForm.controls['descricao'].setValue(curso.descricao);
        this.cursoForm.controls['limiteDeVagas'].setValue(curso.limiteVagas);
  }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(
      (params: any) => {
        if(params['id'] != null){
        this.id = params['id'];
        this.cursoService.getById(this.id).subscribe(data => {this.cursoAtual = data; this.showUpdate(this.cursoAtual)});
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
          this.cursoForm.controls['codigo'].disable();
        }
      }
    );
  }

  insertCurso(){
      this.curso.id = parseInt(this.cursoForm.controls['codigo'].value);
      this.curso.nome = this.cursoForm.controls['nome'].value;
      this.curso.descricao = this.cursoForm.controls['descricao'].value;
      this.curso.limiteVagas = parseInt(this.cursoForm.controls['limiteDeVagas'].value);

      this.cursoService.insertCurso(this.curso).subscribe(data =>{ this.route.navigate(['/curso']);
                                                          alert("Cadastrado com sucesso!");},
                                                          error => console.log('erro'));
  }

  updateCurso(){
  
      this.curso.id = parseInt(this.cursoForm.controls['codigo'].value);
      this.curso.nome = this.cursoForm.controls['nome'].value;
      this.curso.descricao = this.cursoForm.controls['descricao'].value;
      this.curso.limiteVagas = this.cursoForm.controls['limiteDeVagas'].value;
      
      this.cursoService.updateCurso(this.curso).subscribe(data => { 
                                                                       alert("Atualizado com sucesso!");
                                                                       this.route.navigate(['/curso']);   
                                                                  
                                                                },
                                                          error => console.log(error));
    //console.log(this.curso);
  }

  voltar(){
    //this.curso = {};
    this.route.navigate(['/curso']);
  }
}
