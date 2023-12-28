import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {UsuariosService} from "../usuarios.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet, RouterLinkActive, RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UsuariosService]
})
export class LoginComponent {
  constructor(private UsuariosService: UsuariosService) {}

  LogIn(): void{
    // @ts-ignore
    var Email = document.getElementById("EmailLogIn").value

    // @ts-ignore
    var password = document.getElementById("ContrasenaLogin").value

    this.UsuariosService.LogIn(Email,password);
  }
}
