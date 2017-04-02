import { Usuario } from './Usuario';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class LoginService {

  private validate: boolean = false;

  LogInOrLogOut = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  validateLogin(usuario: Usuario) : boolean{

    if(usuario.login == 'admin' && usuario.senha == 'admin'){
      //alert('logado');
      this.validate = true;
      this.LogInOrLogOut.emit(true);
      this.router.navigate(['/']);

      return this.validate;
    }
    //alert('!logado');
    this.LogInOrLogOut.emit(false);
    return this.validate;

 }

 getStateUser(){
   return this.validate;
 }

}
