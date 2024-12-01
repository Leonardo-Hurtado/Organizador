import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage{

  username: string = history.state.username;
  password: string = history.state.password;
  nombre: string = history.state.nombre;
  apellido: string = history.state.apellido;
  email: string = history.state.email;
  direccion: string = history.state.direccion;

  mostrarTexto: boolean = false; // Estado inicial: texto oculto

  constructor() { 
    addIcons({ create });

  }
  ngOnInit() {
    this.username = sessionStorage.getItem('username') || '';
    this.password = sessionStorage.getItem('password') || '';
    this.email = sessionStorage.getItem('email') || '';
    this.nombre = sessionStorage.getItem('nombre') || '';
    this.apellido = sessionStorage.getItem('apellido') || '';
    this.direccion = sessionStorage.getItem('direccion') || '';
  }


  toggleMostrarTexto() {
    this.mostrarTexto = !this.mostrarTexto;
  }


}
