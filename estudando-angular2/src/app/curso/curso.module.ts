import { PaginacaoModule } from './../paginacao/paginacao.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CursoRoutingModule } from './curso.routing.module';
import { CursoService } from './curso.service';
import { CursoComponent } from './curso.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoFormularioComponent } from './curso-formulario/curso-formulario.component';
import { CursoListaComponent } from './curso-lista/curso-lista.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PaginacaoModule,
    CursoRoutingModule
  ],
  declarations: [CursoComponent, CursoFormularioComponent, CursoListaComponent],
  exports: [],
  providers: [CursoService]
})
export class CursoModule { }
