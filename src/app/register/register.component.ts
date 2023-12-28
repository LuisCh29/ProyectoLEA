
import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  Reg() {
    // @ts-ignore
    let email = document.getElementById("Email").value

    // @ts-ignore
    let contrasena = document.getElementById("contra").value

    localStorage.setItem('email1',email)
    localStorage.setItem('contra1',contrasena)

    console.log("se ha guardado " + email + " " +contrasena)
  }
}
