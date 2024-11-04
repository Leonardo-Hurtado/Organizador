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

  constructor() { 
    addIcons({ create });

  }



}
