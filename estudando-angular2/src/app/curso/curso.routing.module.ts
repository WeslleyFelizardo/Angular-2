import { AuthGuard } from './../guards/auth.guard';
import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { CursoFormularioComponent } from './curso-formulario/curso-formulario.component';
import { CursoComponent } from './curso.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CURSOS_ROUTES: Routes = [
    { path: 'curso', component: CursoComponent, canActivate: [AuthGuard]},
    { path: 'curso/novo', component: CursoFormularioComponent, canActivate: [AuthGuard]},
    { path: 'curso/:id/edit', component: CursoFormularioComponent, canActivate: [AuthGuard]},
    { path: 'curso/:id', component: CursoComponent, canActivate: [AuthGuard]}
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

@NgModule({
    imports: [RouterModule.forChild(CURSOS_ROUTES)],
    exports: [RouterModule]
})
export class CursoRoutingModule{

}