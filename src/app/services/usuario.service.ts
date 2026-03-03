import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private _http: HttpClient) {}

  private endPoint: string = environment.urlBase + environment.urlBaseUsuarios;
  private uri: string = '';

  obtenerUsuarios() {
    this.uri = `${this.endPoint}/ObtenerUsuarios`;
    return this._http.get(this.uri);
  }

  obtenerUsuarioPorId(id: string) {
    this.uri = `${this.endPoint}/ObtenerUsuarioPorId`;

    return this._http.get(`${this.uri}?idUsuario=${id}`);
  }

  guardarUsuario(usuario: Usuario) {
    const _usuario = { ...usuario };

    if (_usuario.id === 0) {
      this.uri = `${this.endPoint}/AgregarUsuario`;
      return this._http.post(`${this.uri}`, _usuario);
    } else {
      this.uri = `${this.endPoint}/ActualizarUsuario`;
      return this._http.put(`${this.uri}`, _usuario);
    }
  }
}
