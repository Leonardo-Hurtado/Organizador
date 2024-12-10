import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ApiRestService } from 'src/app/services/api-rest.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {

  usuarios: Usuario[] = [];

  nuevoUsuario: Usuario = {
    username: '',
    password: '',
    email: '',
    nombre: '',
    apellido: '',
    direccion: '',
  }

  constructor(private router: Router, private fb: FormBuilder, private api: ApiRestService) { }

  agregarUsuario() {
    this.api.addUsuario(this.nuevoUsuario).subscribe(
      (data) => {
        this.usuarios.push(data);
        this.limpiarCampos();
        this.login();
      },

    )

  }


  limpiarCampos() {
    this.nuevoUsuario = {
      username: '',
      password: '',
      email: '',
      nombre: '',
      apellido: '',
      direccion: '',
    };
  }

  login() {
    this.router.navigate(['/login']);
  }

  back() {
    this.router.navigate(['/index']);
  }

  /*   this.usuarioForm = this.fb.group({
       username: ['', Validators.required],
       password: ['', Validators.required],
       email: ['', Validators.required],
       nombre: ['', Validators.required],
       apellido: ['', Validators.required],
       direccion: ['', Validators.required]
     })
   }
 
 
   ionViewWillEnter() {
     this.getUsuarios();
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
 
   getUsuarios() {
     console.log('obtener');
     this.api.getUsuarios().subscribe((data) => {
       this.usuarios = data
     });
   }
 
   OnSubmit() {
     if (this.usuarioForm.valid) {
       const NuevoUsuario = this.usuarioForm.value;
       this.api.addUsuario(NuevoUsuario).subscribe((response) => {
         console.log(response);
         this.getUsuarios();
         this.usuarioForm.reset();
       })
     }
 
 
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
 */

}