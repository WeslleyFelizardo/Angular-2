import { CursoService } from './curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: any[];

  constructor() {
    //this.cursos = cursoService.getCursos();
    //console.log(this.cursos);
   }

  ngOnInit() {
  }

  

}
