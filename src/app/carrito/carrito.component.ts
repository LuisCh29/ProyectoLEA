import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductosService, Producto, addProducto} from "../productos.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    NgForOf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})


export class CarritoComponent {
  productos: any[][] = [[], []];
  totalCompra: number = 0;
  totalConDescuento: number = this.totalCompra;
  codigoPromocional: string = '';

  ngOnInit() {
    const productosCarrito = localStorage.getItem('ProdsCar');
    this.productos = productosCarrito ? JSON.parse(productosCarrito) : [[], []];
    this.sumarPrecios();
    this.aplicarDescuento();
  }

  addProducto(NomProducto: string, PreProducto: number) {
    const nuevoProducto: Producto = {
      nombre: NomProducto,
      precio: PreProducto
    };

    addProducto(nuevoProducto, this.productos);
  }

  limpiarLista() {
    localStorage.removeItem('ProdsCar');
  }



  sumarPrecios() {
    this.totalCompra = this.productos[0].reduce((total, producto) => total + producto.precio, 0);
  }

  aplicarDescuento() {
    // @ts-ignore
    if (document.getElementById('codigoPromocional').value === '2024') {
      this.totalConDescuento = this.totalCompra - 15;
      console.log('Funciona, descuento aplicado');
    } else {
      this.totalConDescuento = this.totalCompra;
    }
  }

}


