import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {UsuariosService} from "../usuarios.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet, RouterLinkActive, RouterLink, NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UsuariosService]
})
export class LoginComponent {

  router: string = "/login";

  constructor(private UsuariosService: UsuariosService) {
    sessionStorage.setItem('error','false')
  }

  LogIn(): void{
    // @ts-ignore
    var Email = document.getElementById("EmailLogIn").value

    // @ts-ignore
    var password = document.getElementById("ContrasenaLogin").value

    this.UsuariosService.LogIn(Email,password);
    if(sessionStorage.getItem('logged')==="true"){
      this.router = "/catalogo"
      console.log(this.router)
      sessionStorage.setItem('error','false')
    }
    else{
      sessionStorage.setItem('error','true')
    }
  }

  protected readonly sessionStorage = sessionStorage;
}
