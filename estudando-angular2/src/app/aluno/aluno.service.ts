import { Aluno } from './aluno';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpUtilService } from './../util/http-util.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class AlunoService {

   urlResource: string = "Aluno";
   private alunos: Aluno[] = [
            // {id: 1, nome: 'Weslley', cpf: '222.222.222-00', idCurso: 1},
            // {id: 2, nome: 'Murilo',  cpf: '222.222.222-00', idCurso: 1  },
            // {id: 3, nome: 'Lucas',   cpf: '222.222.222-00', idCurso: 1}
            // {id: 4, nome: 'Thays',   cpf: '222.222.222-00', idCurso: 1},
            // {id: 5, nome: 'Pollyana',   cpf: '222.222.222-00', idCurso: 2},
            // {id: 6, nome: 'Cleide',   cpf: '222.222.222-00', idCurso: 2},
            // {id: 7, nome: 'Mary',   cpf: '222.222.222-00', idCurso: 5},
            // {id: 8, nome: 'Miminha',   cpf: '222.222.222-00', idCurso: 5},
            // {id: 9, nome: 'Samantha',   cpf: '222.222.222-00', idCurso: 4},
            // {id: 10, nome: 'David',   cpf: '222.222.222-00', idCurso: 4},
            // {id: 11, nome: 'Amanda',   cpf: '222.222.222-00', idCurso: 1},
            // {id: 12, nome: 'Bianca',   cpf: '222.222.222-00', idCurso: 2},
            // {id: 13, nome: 'Carolina',   cpf: '222.222.222-00', idCurso: 2},
            // {id: 14, nome: 'Isaque',   cpf: '222.222.222-00', idCurso: 5},
            // {id: 15, nome: 'Pedro',   cpf: '222.222.222-00', idCurso: 4},
            // {id: 16, nome: 'Simone',   cpf: '222.222.222-00', idCurso: 4},
            // {id: 17, nome: 'Renata',   cpf: '222.222.222-00', idCurso: 2},
            // {id: 18, nome: 'Carlos',   cpf: '222.222.222-00', idCurso: 3},
            // {id: 19, nome: 'José',   cpf: '222.222.222-00', idCurso: 3},
            // {id: 20, nome: 'Flavia',   cpf: '222.222.222-00', idCurso: 5}

   ];

  constructor(private utilHttp: HttpUtilService, private http: Http) {

    this.urlResource = this.utilHttp.url(this.urlResource);
   }

  getAll(): Observable<Aluno[]>{
     return this.http.get(this.urlResource, this.utilHttp.headers())
            .map(this.utilHttp.extrairDados)
            .catch(this.utilHttp.processarErros);
  }

  getAlunoById(id: number): Observable<Aluno>{
      return this.http.get(this.urlResource + '/' + id, this.utilHttp.headers())
             .map(this.utilHttp.extrairDados)
             .catch(this.utilHttp.processarErros);
  }

  deleteAluno(id: any){
  
  }
  
  insertAluno(aluno: any){
   
  }

  updateAluno(aluno: Aluno): Observable<String>{
      let params = JSON.stringify(aluno);
      return this.http.put(this.urlResource, params, this.utilHttp.headers())
             .map(this.utilHttp.extrairDados)
             .catch(this.utilHttp.processarErros);
  }
}