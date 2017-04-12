import { Curso } from './Curso';
import { AlunoService } from './../aluno/aluno.service';
import { Injectable } from '@angular/core';
import { HttpUtilService } from '../util/http-util.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class CursoService {

  urlResource: string = "Curso";



  constructor(private alunoService: AlunoService, private utilHttp: HttpUtilService, private http: Http) {
    
    this.urlResource = this.utilHttp.url(this.urlResource);
   }

 
  getAll(): Observable<Curso[]>{
     return this.http.get(this.urlResource, this.utilHttp.headers())
            .map(this.utilHttp.extrairDados)
            .catch(this.utilHttp.processarErros);
  }

  getById(id: number): Observable<Curso>{
     return this.http.get(this.urlResource + '/' + id, this.utilHttp.headers())
            .map(this.utilHttp.extrairDados)
            .catch(this.utilHttp.processarErros);
           //.catch(this.utilHttp.processarErros());
  }

  insertCurso(curso: Curso): Observable<String>{
    let params = JSON.stringify(curso);
    //console.log();
    	return this.http.post(this.urlResource, params,this.utilHttp.headers()
    					)
      				.map(this.utilHttp.extrairDados)
	            .catch(this.utilHttp.processarErros); 
  }

  updateCurso(curso: Curso): Observable<String> {
	  	let params = JSON.stringify(curso);
    	return this.http.put(this.urlResource, params, 
    					this.utilHttp.headers())
      				.map(this.utilHttp.extrairDados)
	            .catch(this.utilHttp.processarErros);
	}

  deleteCurso(id: number) : Observable<String>{
    return this.http.delete(this.urlResource + '/' + id, this.utilHttp.headers())
          .map(this.utilHttp.extrairDados)
          .catch(this.utilHttp.processarErros);
  }

  returnAmmountAlunosByCurso(id: number): Observable<String>{
    //console.log(this.urlResource + '/ammount/' + id);
    return this.http.get(this.urlResource + '/ammount/' + id, this.utilHttp.headers())
           .map(this.utilHttp.extrairDados)
           .catch(this.utilHttp.processarErros);
  }

}
