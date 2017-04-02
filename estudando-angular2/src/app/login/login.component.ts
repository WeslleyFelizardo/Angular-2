import { LoginService } from './login.service';
import { Usuario } from './Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

     usuario: Usuario = new Usuario();
     canLogar: boolean = false;

   constructor(private loginService: LoginService) {   
    
   }

  // ngOnInit() {
  // }

   doLogin(){    
    
    this.canLogar = this.loginService.validateLogin(this.usuario);
    
  }

}
