import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad.model';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-agrega',
  templateUrl: './agrega.component.html',
  styleUrls: ['./agrega.component.scss'],
})
export class AgregarComponent {

 actividades: Actividad [] = [];
 
 nuevaActividad: Actividad = {
  nombreAct: '',
  tipoAct: '',
  detalleAct: '',
  fechaAct: '',
  grupal: false,
  
 }

  constructor(private router: Router, private api: ApiRestService) { }

  agregarActividad() {
    this.api.addAct(this.nuevaActividad).subscribe(
      (data) => {
        this.actividades.push(data);
        this.limpiarCampos();
        this.continue();
      },

    )

  }


  limpiarCampos() {
    this.nuevaActividad = {
      nombreAct: '',
      tipoAct: '',
      detalleAct: '',
      fechaAct: '',
      grupal: false,
    };
  }
  
  continue(){
    this.router.navigate(['/actividad']);
  }
}

