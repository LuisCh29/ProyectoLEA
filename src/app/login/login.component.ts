import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet, Router} from "@angular/router";
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

  constructor(private UsuariosService: UsuariosService, private router: Router) {
    sessionStorage.setItem('error','false')
  }

  LogIn(): void{
    // @ts-ignore
    var Email = document.getElementById("EmailLogIn").value

    // @ts-ignore
    var password = document.getElementById("ContrasenaLogin").value

    this.UsuariosService.LogIn(Email,password);
    if(sessionStorage.getItem('logged')==="true"){
      console.log(this.router)
      sessionStorage.setItem('error','false')
      this.router.navigate(["/catalogo"])
    }
    else{
      sessionStorage.setItem('error','true')
    }
  }

  protected readonly sessionStorage = sessionStorage;
}
