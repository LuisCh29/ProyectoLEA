import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ProductosService} from "../productos.service";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

  constructor(private ProductosService: ProductosService) {}

  filter(filter: string){
    sessionStorage.setItem("filter",filter)
  }

  addProduct(product: string){
    this.ProductosService.addProducto(product)
    console.log(product)
  }

}
