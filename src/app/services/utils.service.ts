import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private http: HttpClient) {}

  private endPoint: string = environment.urlBase + environment.urlBaseUtils;
  private uri: string = '';

  obtenerRegiones() {
    this.uri = `${this.endPoint}/ObtenerRegiones`;

    return this.http.get(this.uri);
  }
  obtenerProvinciasPorRegion(id: string) {
    this.uri = `${this.endPoint}/ObtenerProvinciasPorIdRegion?idRegion=${id}`;

    return this.http.get(this.uri);
  }
  obtenerComunasPorProvincia(id: string) {
    this.uri = `${this.endPoint}/ObtenerComunasPorIdProvincia?idProvincia=${id}`;

    return this.http.get(this.uri);
  }
  obtenerComunasPorRegion(id: string) {
    this.uri = `${this.endPoint}/ObtenerComunasPorIdRegion?idRegion=${id}`;

    return this.http.get(this.uri);
  }
  obtenerRoles() {
    this.uri = `${this.endPoint}/ObtenerRoles`;

    return this.http.get(this.uri);
  }

  obtenerOperadores() {
    this.uri = `${this.endPoint}/ObtenerUsuariosPorIdRol?idRol=2`;

    return this.http.get(this.uri);
  }

  obtenerJefesDeVenta() {
    this.uri = `${this.endPoint}/ObtenerUsuariosPorIdRol?idRol=3`;

    return this.http.get(this.uri);
  }

  obtenerMes() {
    this.uri = `${this.endPoint}/ObtenerMes`;

    return this.http.get(this.uri);
  }

  obtenerMetodosPago() {
    this.uri = `${this.endPoint}/ObtenerMetodosPago`;

    return this.http.get(this.uri);
  }

  obtenerTipoAbono() {
    this.uri = `${this.endPoint}/ObtenerTipoAbono`;

    return this.http.get(this.uri);
  }

  obtenerFormasTrabajo() {
    this.uri = `${this.endPoint}/ObtenerFormasTrabajo`;

    return this.http.get(this.uri);
  }

  obtenerTipoDescuento() {
    this.uri = `${this.endPoint}/ObtenerTipoDescuento`;

    return this.http.get(this.uri);
  }

  obtenerLocalesPorIdOperador(id: string) {
    this.uri = `${this.endPoint}/ObtenerLocalesPorIdOperador?idOperador=${id}`;

    return this.http.get(this.uri);
  }

  obtenerAnniosFiltroPagos(idOperador: string, idLocal: string) {
    this.uri = `${this.endPoint}/ObtenerAnniosPagos?idOperador=${idOperador}&idLocal=${idLocal}`;

    return this.http.get(this.uri);
  }
}
