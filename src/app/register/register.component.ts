import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {UsuariosService} from "../usuarios.service";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [UsuariosService]
})
export class RegisterComponent {
  constructor(private UsuariosService: UsuariosService) {}

  Reg(): void{
    // @ts-ignore
    let email = document.getElementById("Email").value
    // @ts-ignore
    let contrasena = document.getElementById("contra").value

    this.UsuariosService.addUser(email, contrasena)

  }


}
