import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  username: string = '';
  password: string = '';
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  direccion: string = '';

  mostrarTexto: boolean = false; // Estado inicial: texto oculto

  constructor() { 
    addIcons({ create });
  }

  ngOnInit() {
    // Recuperar los datos de sessionStorage
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
