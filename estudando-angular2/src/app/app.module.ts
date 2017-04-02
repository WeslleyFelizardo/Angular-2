import { HttpUtilService } from './util/http-util.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginService } from './login/login.service';
//import { LoginModule } from './login/login.module';
import { AlunoModule } from './aluno/aluno.module';
import { LoginComponent } from './login/login.component';

import { CursoModule } from './curso/curso.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MascaraDirective } from './diretivas/mascara.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MascaraDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursoModule,
    AlunoModule,
    //LoginModule,
    //PaginacaoModule,
    AppRoutingModule
  ],
  providers: [LoginService, AuthGuard, HttpUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
