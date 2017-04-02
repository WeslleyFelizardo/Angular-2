import { AuthGuard } from './../guards/auth.guard';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { AlunoComponent } from './aluno.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ALUNOS_ROUTES: Routes = [
    { path: 'aluno', component: AlunoComponent, canActivate: [AuthGuard]},
    { path: 'aluno/novo', component: AlunoFormularioComponent, canActivate: [AuthGuard]},
    { path: 'aluno/:id/edit', component: AlunoFormularioComponent, canActivate: [AuthGuard]},
    { path: 'aluno/:id', component: AlunoComponent, canActivate: [AuthGuard]}
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

@NgModule({
    imports: [RouterModule.forChild(ALUNOS_ROUTES)],
    exports: [RouterModule]
})
export class AlunoRoutingModule{

}