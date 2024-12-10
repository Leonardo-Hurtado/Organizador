import { Component, OnInit } from '@angular/core';
import { ApiRestService } from './services/api-rest.service';
import { Usuario } from './models/usuario.model';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Sesión', url: 'index', icon: 'person' },
    { title: 'Cuenta', url: 'usuario', icon:'person' },
    { title: 'Actividades', url: 'actividad', icon: 'documents' },
    { title: 'Agregar Actividad', url: 'agregar', icon: 'add-circle' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  nombre: string = '';
  apellido: string = '';
  email: string = '';

  constructor(private api: ApiRestService) {}
  

  ngOnInit() {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario') || '{}');

    if (usuarioLogueado) {
      this.nombre = usuarioLogueado.nombre;
      this.apellido = usuarioLogueado.apellido;
      this.email = usuarioLogueado.email;
    }
  }
}

