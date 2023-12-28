import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet, RouterLinkActive, RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LogIn() {
    // @ts-ignore
    var Email = document.getElementById("EmailLogIn").value

    // @ts-ignore
    var password = document.getElementById("ContrasenaLogin").value

    let email1 = localStorage.getItem('email1')
    let contra1 = localStorage.getItem('contra1')

    if(Email === email1){
      if(password === contra1){
        console.log("Esto furula")
      }
    }
  }
}
