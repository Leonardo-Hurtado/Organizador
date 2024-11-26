import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  username: string = '';
  password: string = '';
  email: string = '';
  nombre: string = '';
  apellido: string = '';
  direccion: string = "";

  constructor(private router: Router, private dbService: DatabaseService) { }

  async ngOnInit() {
    await this.dbService.initDB();
  }

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

  async addUser(event: Event) {
    event.preventDefault();

    await this.dbService.AddUser(this.username, this.password, this.email, this.nombre, this.apellido, this.direccion);

    this.username = '';
    this.password = '';
    this.email = '';
    this.nombre = '';
    this.apellido = '';
    this.direccion = '';
  }
}