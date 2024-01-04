import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ProductosService} from "../productos.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

  ngOnInit() {
    sessionStorage.setItem("filter",'')
  }

  constructor(private ProductosService: ProductosService) {
    sessionStorage.setItem("filter",'')
  }

  filter(filter: string){
    sessionStorage.setItem("filter",filter)
    console.log(filter)
  }

  addProduct(product: string, precio:number){
    this.ProductosService.addProducto(product, precio)
    console.log(product + precio)
  }

  protected readonly sessionStorage = sessionStorage;
}
