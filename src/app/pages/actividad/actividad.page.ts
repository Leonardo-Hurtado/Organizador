import { Component} from '@angular/core';
import { addIcons } from 'ionicons';
import { create, trash } from 'ionicons/icons';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage {

  nombreAct: string = '';
  tipoAct: string = '';
  detalleAct: string = '';
  fechaAct: string | null = null;
  grupal: string = '';

  constructor() { }

  ngOnInit() {
    // Recuperar datos de sessionStorage
    this.nombreAct = sessionStorage.getItem('nombreAct') || '';
    this.tipoAct = sessionStorage.getItem('tipoAct') || '';
    this.detalleAct = sessionStorage.getItem('detalleAct') || '';
    this.fechaAct = sessionStorage.getItem('fechaAct') || ''; // Ya es un string
    this.grupal = sessionStorage.getItem('grupal') || '';
  }
}