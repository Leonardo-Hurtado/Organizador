import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiRestService } from 'src/app/services/api-rest.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarios: Usuario[] = [];
  username: string = "";
  password: string = "";
  errorMessage: string = ""; 

  constructor(private router: Router, private api: ApiRestService) { }

  ngOnInit() {
   
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.api.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }

  
  login() {
    if (!this.username || !this.password) {
      this.errorMessage = "Por favor ingrese el nombre de usuario y la contraseña.";
      return;
    }
    
    const usuario = this.usuarios.find(u => u.username === this.username);

    if (usuario) {
      if (usuario.password === this.password) {
        sessionStorage.setItem('usuario', JSON.stringify({
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          email: usuario.email,
          direccion: usuario.direccion,
          username: usuario.username,
          password: usuario.password

        }));
        const navigationExtras: NavigationExtras = {
          queryParams: { username: this.username }
        };
        this.router.navigate(['/index'], navigationExtras);
      } else {
        this.errorMessage = "Contraseña incorrecta.";
      }
    } else {
      this.errorMessage = "El usuario no existe.";
    }
  }


  back() {
    this.router.navigate(['/index']);
  }
}
