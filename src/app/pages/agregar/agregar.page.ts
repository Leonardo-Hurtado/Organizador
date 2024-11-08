import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage  {

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
  }

  siguiente() {
    this.router.navigate(['/actividad'])
  }

}
