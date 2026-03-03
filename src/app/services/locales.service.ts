import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Local } from '../models/local';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalesService {
  constructor(private http: HttpClient) {}

  private endPoint: string = environment.urlBase + environment.urlBaseLocales;
  private uri: string = '';

  obtenerLocales() {
    this.uri = `${this.endPoint}/ObtenerLocales`;

    return this.http.get(this.uri);
  }

  obtenerLocalPorId(id: string) {
    this.uri = `${this.endPoint}/ObtenerLocalPorId`;

    return this.http.get(`${this.uri}?idLocal=${id}`);
  }

  guardarLocal(local: Local) {
    const _local = { ...local };

    if (_local.id === 0) {
      this.uri = `${this.endPoint}/AgregarLocal`;
      return this.http.post(`${this.uri}`, _local);
    } else {
      this.uri = `${this.endPoint}/ActualizarLocal`;
      return this.http.put(`${this.uri}`, _local);
    }
  }
}
