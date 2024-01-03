import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: any[][];

  constructor() {
    const productosCarrito = localStorage.getItem("ProdsCar")
    this.productos =  productosCarrito ? JSON.parse(productosCarrito) : [[], []];
  }

  addProducto(NomProducto: string, PreProducto: number) {
    const nuevoProducto = {
      nombre: NomProducto,
      precio: PreProducto
    };

    this.productos[0].push(nuevoProducto);

    localStorage.setItem('ProdsCar', JSON.stringify(this.productos));
    console.log(this.productos);
  }
}

export interface Producto {
  nombre: string;
  precio: number;
}

export function addProducto(producto: Producto, productos: any[][]) {
  productos[0].push(producto);

  localStorage.setItem('ProdsCar', JSON.stringify(productos));
  console.log(productos);
}
