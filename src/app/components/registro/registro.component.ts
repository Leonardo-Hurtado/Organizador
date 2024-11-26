import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent{
  username: string = '';
  password: string = '';
  email: string = '';
  nombre: string = '';
  apellido: string = '';
  direccion: string = "";

  constructor(private router: Router) { }

  login() {
    
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('password', this.password);
    sessionStorage.setItem('email', this.email);
    sessionStorage.setItem('nombre', this.nombre);
    sessionStorage.setItem('apellido', this.apellido);
    sessionStorage.setItem('direccion', this.direccion);

    this.router.navigate(['/usuario']);
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
    this.router.navigate(['/index']);
  }
}