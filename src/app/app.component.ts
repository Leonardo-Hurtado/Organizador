import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sesión', url: 'index', icon: 'person' },
    { title: 'Cuenta', url: 'usuario', icon:'person' },
    { title: 'Actividades', url: 'actividad', icon: 'documents' },
    { title: 'Agregar Actividad', url: 'agregar', icon: 'add-circle' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  username: string = history.state.username;
  password: string = history.state.password;
  nombre: string = history.state.nombre;
  apellido: string = history.state.apellido;
  email: string = history.state.email;
  direccion: string = history.state.direccion;

  constructor() {}
  
  ngOnInit() {
    // Recuperar datos de sessionStorage
    this.username = sessionStorage.getItem('username') || '';
    this.email = sessionStorage.getItem('email') || '';
    this.nombre = sessionStorage.getItem('nombre') || '';
    this.apellido = sessionStorage.getItem('apellido') || '';
    this.direccion = sessionStorage.getItem('direccion') || '';
  }
}

