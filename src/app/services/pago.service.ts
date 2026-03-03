import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AgregarPago, PagoPendiente, PagoPendienteReq } from '../models/pago';

@Injectable({
  providedIn: 'root',
})
export class PagoService {
  private endPoint: string = environment.urlBase + environment.urlBasePago;
  private uri: string = '';

  constructor(private _http: HttpClient) {}

  AgregarPago(req: AgregarPago) {
    this.uri = `${this.endPoint}/AgregarPago`;
    return this._http.post(this.uri, req);
  }

  ObtenerRegistrosDePagoPorOperador(req:PagoPendienteReq) {
    this.uri = `${this.endPoint}/ObtenerPagoRegistradoPorOperador`;
    return this._http.post(this.uri, req);
  }
}
