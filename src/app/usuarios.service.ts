import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios: any[][];

  constructor() {
    const storedUsuarios = sessionStorage.getItem('usuarios');
    this.usuarios = storedUsuarios ? JSON.parse(storedUsuarios) : [[], []];
  }

  LogIn(usuario: string, contra: string) {
    console.log(this.usuarios)
    for (let i = 0; i < this.usuarios[0].length; i++) {
      if (this.usuarios[0][i] === usuario && this.usuarios[1][i] === contra) {
        sessionStorage.setItem('logged','true')
        return;
      }
    }

    console.log("No se encontró la combinación de usuario y contraseña");
  }

  addUser(usuario: string, contra: string) {

    this.usuarios[0].push(usuario)

    this.usuarios[1].push(contra)

    sessionStorage.setItem('usuarios', JSON.stringify(this.usuarios));

    console.log("se ha guardado " + usuario + " " +contra)
    console.log(this.usuarios)
  }

}
