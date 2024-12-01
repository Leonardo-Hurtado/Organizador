import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agrega',
  templateUrl: './agrega.component.html',
  styleUrls: ['./agrega.component.scss'],
})
export class AgregarComponent {

  nombreAct: string = '';
  tipoAct: string = '';
  detalleAct: string = '';
  fechaAct: string | null = null;
  grupal: string = '';

  constructor(private router: Router) { }

  limpiarCampos() {
    this.nombreAct = "";
    this.tipoAct = "";
    this.detalleAct = "";
    this.fechaAct = null;
    this.grupal = "";
    
    
    sessionStorage.removeItem('nombreAct');
    sessionStorage.removeItem('tipoAct');
    sessionStorage.removeItem('detalleAct');
    sessionStorage.removeItem('fechaAct');
    sessionStorage.removeItem('grupal');
  }

  siguiente() {
    sessionStorage.setItem('nombreAct', this.nombreAct);
    sessionStorage.setItem('tipoAct', this.tipoAct);
    sessionStorage.setItem('detalleAct', this.detalleAct);
    sessionStorage.setItem('fechaAct', this.fechaAct ? this.fechaAct.toString() : '');
    sessionStorage.setItem('grupal', this.grupal);

    this.router.navigate(['/actividad']);
  }
}

