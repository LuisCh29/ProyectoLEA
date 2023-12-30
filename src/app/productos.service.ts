import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: any[];

  constructor() {
    const productosCarrito = sessionStorage.getItem("prodCarrito")
    this.productos =  productosCarrito ? JSON.parse(productosCarrito) : [];
  }

  addProducto(NomProducto: string){

    this.productos.push(NomProducto)

    sessionStorage.setItem('ProdsCar', JSON.stringify(this.productos))
    console.log(this.productos)
  }
}
