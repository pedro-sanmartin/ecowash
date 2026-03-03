import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../models/servicio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  constructor(private http: HttpClient) {}

  private endPoint: string = environment.urlBase + environment.urlBaseServicios;
  private uri: string = '';

  obtenerServicios() {
    this.uri = `${this.endPoint}/obtenerServicios`;

    return this.http.get(this.uri);
  }

  obtenerServicioPorId(id: string) {
    this.uri = `${this.endPoint}/obtenerServicioPorId`;

    return this.http.get(`${this.uri}?idServicio=${id}`);
  }

  guardarServicio(servicio: Servicio) {
    const _servicio = { ...servicio };

    if (_servicio.id === 0) {
      this.uri = `${this.endPoint}/agregarServicio`;
      return this.http.post(`${this.uri}`, _servicio);
    } else {
      this.uri = `${this.endPoint}/actualizarServicio`;
      return this.http.put(`${this.uri}`, _servicio);
    }
  }
}
