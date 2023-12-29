import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  totalCompra: number = 50;
  totalConDescuento: number = this.totalCompra;

  aplicarDescuento() {
    // @ts-ignore
    if (document.getElementById("codigoPromocional").value === '2024') {
      this.totalConDescuento = this.totalCompra - 15;
    } else {
      this.totalConDescuento = this.totalCompra;
      console.log("funciona, descuento aplicado")
    }
  }

}
