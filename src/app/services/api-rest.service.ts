import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Actividad } from '../models/actividad.model';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  private apiURL = 'http://127.0.0.1:8000/api/';


  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiURL}usuarios/`);
  }

  getUsuario(username: string): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiURL}usuarios/${username}`);
  }

  addUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(`${this.apiURL}usuarios/`, usuario);
  }

  upUsuario(username: string, usuario: Partial<Usuario>): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiURL}usuarios/${username}`, usuario);
  }

  deleteUsuario(username: string): Observable<any>{
    return this.http.delete(`${this.apiURL}usuarios/${username}`);
  }

  getActs(): Observable<Actividad[]> { 
    return this.http.get<Actividad[]>(`${this.apiURL}actividades/`);
  }
  
  getAct(nombreAct: string): Observable<Actividad> {
    return this.http.get<Actividad>(`${this.apiURL}actividades/${nombreAct}`);
  }
  
  addAct(actividad: Actividad) {
    return this.http.post<Actividad>(`${this.apiURL}actividades/`, actividad);
  }
  
  upAct(nombreAct: string, actividad: Partial<Actividad>): Observable<Actividad> {
    return this.http.put<Actividad>(`${this.apiURL}actividades/${nombreAct}`, actividad);
  }
  
  deleteAct(nombreAct: string): Observable<any> {
    return this.http.delete(`${this.apiURL}actividades/${nombreAct}`);
  }
}  