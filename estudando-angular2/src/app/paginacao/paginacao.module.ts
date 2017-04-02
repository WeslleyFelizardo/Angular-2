import { PaginacaoComponent } from './paginacao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginacaoComponent],
  exports: [PaginacaoComponent]
})
export class PaginacaoModule { }
