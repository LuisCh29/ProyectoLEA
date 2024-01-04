import { Routes } from '@angular/router';
import {CondicionesComponent } from "./condiciones/condiciones.component";
import {MenuComponent} from "./menu/menu.component";
import {PreguntesFrecuentsComponent} from "./preguntes-frecuents/preguntes-frecuents.component";
import {ContactosComponent} from "./contactos/contactos.component";
import {CatalogoComponent} from "./catalogo/catalogo.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {CarritoComponent} from "./carrito/carrito.component";
import {CompraComponent} from "./compra/compra.component";

export const routes: Routes = [
  {path: 'condiciones', title: 'condiciones',component:CondicionesComponent},
  {path: '', title: '', component:MenuComponent},
  {path: 'faq', title: 'faq', component:PreguntesFrecuentsComponent},
  {path: 'formulario-contactos', title: 'contactos', component:ContactosComponent},
  {path: 'catalogo', title: 'catalogo', component:CatalogoComponent},
  {path: 'login', title: 'login', component:LoginComponent},
  {path: 'register', title: 'register', component:RegisterComponent},
  {path: 'carrito', title: 'carrito', component:CarritoComponent},
  {path: 'compra', title: 'compra', component:CompraComponent}



];
