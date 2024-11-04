import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage {
  username: string = '';
  password: string = '';
  email: string = '';
  nombre: string = '';
  apellido: string = '';
  direccion: string = "";

  constructor(private router: Router) { }

  login() {
    let navigationExtras: NavigationExtras = {
      state: {

        username: this.username,
        password: this.password,
        email: this.email,
        nombre: this.nombre,
        apellido: this.apellido,
        direccion: this.direccion
      }
    }
    this.router.navigate(['/usuario'], navigationExtras);
  }

  limpiarCampos() {
    this.username = "";
    this.password = "";
    this.email = "";
    this.nombre = "";
    this.apellido = "";
    this.direccion = "";


  }

  back() {
    this.router.navigate(['/index'])
  }
}
