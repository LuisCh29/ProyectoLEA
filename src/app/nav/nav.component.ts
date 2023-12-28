import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  protected readonly sessionStorage = sessionStorage;

  ngOnInit() {
    sessionStorage.setItem('logged','false')
  }

  cerrarSesion() {
    sessionStorage.setItem('logged','false')
  }

}
