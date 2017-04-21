import { MascaraDirective } from './../diretivas/mascara.directive';

import { ReactiveFormsModule } from '@angular/forms';
import { PaginacaoModule } from './../paginacao/paginacao.module';
import { AlunoService } from './aluno.service';
import { CursoModule } from './../curso/curso.module';
import { AlunoRoutingModule } from './aluno.routing.module';
import { AlunoComponent } from './aluno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';

@NgModule({
  imports: [
    CommonModule,
    CursoModule,
    ReactiveFormsModule,
    PaginacaoModule,
    AlunoRoutingModule
  ],
  declarations: [AlunoComponent, AlunoFormularioComponent, AlunoListaComponent, MascaraDirective],
  exports: [],
  providers: [AlunoService]
})
export class AlunoModule { }
