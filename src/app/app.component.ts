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

  username: string = '';
  password: string = '';
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  direccion: string ='';

  constructor() {}
  
  ngOnInit() {
    this.username = sessionStorage.getItem('username') || '';
    this.password = sessionStorage.getItem('password') || '';
    this.email = sessionStorage.getItem('email') || '';
    this.nombre = sessionStorage.getItem('nombre') || '';
    this.apellido = sessionStorage.getItem('apellido') || '';
    this.direccion = sessionStorage.getItem('direccion') || '';
  }
}

