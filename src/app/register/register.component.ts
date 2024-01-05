import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {UsuariosService} from "../usuarios.service";


@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [UsuariosService]
})
export class RegisterComponent {
  constructor(private UsuariosService: UsuariosService) {}

  Reg(): void{
    // @ts-ignore
    let user = document.getElementById("user").value
    // @ts-ignore
    let contrasena = document.getElementById("contras").value

    this.UsuariosService.addUser(user, contrasena)

  }


}
