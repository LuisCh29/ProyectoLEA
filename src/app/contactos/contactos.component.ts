import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-contactos',
  standalone: true,
    imports: [
        RouterOutlet,
      RouterLink,
      RouterLinkActive
    ],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {

}
