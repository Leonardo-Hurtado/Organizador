import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad.model';
import { ApiRestService } from 'src/app/services/api-rest.service';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraPhoto, CameraResultType, CameraSource } from '@capacitor/camera';

declare var google: any; // Declaramos la variable google para usar la API de Google Maps

@Component({
  selector: 'app-agrega',
  templateUrl: './agrega.component.html',
  styleUrls: ['./agrega.component.scss'],
})
export class AgregarComponent implements OnInit {

  actividades: Actividad[] = [];
  nuevaActividad: Actividad = {
    nombreAct: '',
    tipoAct: '',
    detalleAct: '',
    fechaAct: '',
    grupal: false,
  };

  currentLocation: { latitude: number; longitude: number } | null = null;
  photo: CameraPhoto | null = null;
  map: any; // Para almacenar el mapa de Google Maps
  marker: any; // Para almacenar el marcador

  constructor(private router: Router, private api: ApiRestService) {}

  ngOnInit() {}

  // Función para agregar la actividad
  agregarActividad() {
    this.api.addAct(this.nuevaActividad).subscribe(
      (data) => {
        this.actividades.push(data);
        this.limpiarCampos();
        this.getCurrentLocation(); // Obtener la localización después de agregar la actividad
      },
      (error) => {
        console.error('Error al agregar la actividad:', error);
      }
    );
  }

  // Limpiar los campos del formulario
  limpiarCampos() {
    this.nuevaActividad = {
      nombreAct: '',
      tipoAct: '',
      detalleAct: '',
      fechaAct: '',
      grupal: false,
    };
  }

  // Función para obtener la ubicación actual
  async getCurrentLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      this.currentLocation = { latitude, longitude };
      console.log('Ubicación actual:', this.currentLocation);

      // Si el mapa no ha sido inicializado, inicializamos Google Maps
      if (!this.map) {
        this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
          center: { lat: latitude, lng: longitude },
          zoom: 13,
        });
      }

      // Si ya existe el marcador, lo actualizamos con la nueva ubicación
      if (this.marker) {
        this.marker.setPosition({ lat: latitude, lng: longitude });
      } else {
        // Si no existe el marcador, creamos uno nuevo
        this.marker = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: this.map,
        });
      }

      // Establecemos la vista del mapa a la nueva ubicación
      this.map.setCenter({ lat: latitude, lng: longitude });
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
      alert('No se pudo obtener la ubicación.');
    }
  }

  // Función para tomar una foto
  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90, // Calidad de la foto
        allowEditing: false, // No permitir editar la foto antes de tomarla
        resultType: CameraResultType.Uri, // Usar URI para acceder a la imagen
        source: CameraSource.Camera, // Abrir la cámara
      });

      this.photo = image;
      console.log('Foto tomada:', this.photo);
      
      const photoUrl = this.photo.webPath;
      alert(`Foto tomada: ${photoUrl}`);
    } catch (error) {
      console.error('Error al tomar la foto:', error);
      alert('No se pudo tomar la foto.');
    }
  }

  // Navegar a otra página (en este caso, a '/actividad')
  continue() {
    this.router.navigate(['/actividad']);
  }
}
