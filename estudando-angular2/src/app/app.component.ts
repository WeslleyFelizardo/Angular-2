//import { LoginService } from './curso/login/login.service';
import { LoginService } from './login/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logInLogOut: string  = 'Entrar';

  constructor(private loginService: LoginService){
  
  }

  ngOnInit(){
    this.loginService.LogInOrLogOut.subscribe(
        mostrar => {
        if(mostrar){ 
          this.logInLogOut = 'Sair'
        }
        });
  }

  out(){
    this.logInLogOut = 'Entrar';
  }
}
