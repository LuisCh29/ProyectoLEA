import { Routes } from '@angular/router';
import {CondicionesComponent } from "./condiciones/condiciones.component";
import {MenuComponent} from "./menu/menu.component";
import {PreguntesFrecuentsComponent} from "./preguntes-frecuents/preguntes-frecuents.component";
import {ContactosComponent} from "./contactos/contactos.component";
export const routes: Routes = [
  {path: 'condiciones', component:CondicionesComponent},
  {path: '', component:MenuComponent},
  {path: 'faq', component:PreguntesFrecuentsComponent},
  {path: 'formulario-contactos', component:ContactosComponent}



];
