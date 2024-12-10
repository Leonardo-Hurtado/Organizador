import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { create, trash } from 'ionicons/icons';
import { Actividad } from 'src/app/models/actividad.model';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage {

  actividades: Actividad[] = [];

  

  constructor( private api: ApiRestService) { }

  ngOnInit() {
    this.obtenerActividades();
  }

  obtenerActividades() {
    this.api.getActs().subscribe(
      (data) => {
        this.actividades = data;
      },
      (error) => {
        console.error('error al obtener las actividades', error)
      }
    );
  }
}