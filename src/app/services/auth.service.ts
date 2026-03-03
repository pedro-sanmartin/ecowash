import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, CambioContrasena } from '../models/auth';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { MOCK_TOKEN } from '../core/mocks/mock-data';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _token: string;
  decodedToken: any;
  // _token: string = sessionStorage.getItem('token');
  //decodedToken: any = helper.decodeToken(this._token);

  constructor(private _http: HttpClient, private _router: Router) {}

  private endPoint: string = environment.urlBase + environment.urlBaseAuth;
  private uri: string = '';

  Login(auth: Login) {
    this.uri = `${this.endPoint}/Login`;

    return this._http.post(this.uri, auth);
  }

  Logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('menus');
    this._router.navigateByUrl('/login');
  }

  RecuperarContrasena(email: string) {
    const body = { email };
    this.uri = `${this.endPoint}/RecuperarContrasena`;

    return this._http.post(this.uri, body);
  }

  ValidarCambioContrasena(token: string) {
    this.uri = `${this.endPoint}/ValidarCambioContrasena?token=${token}`;

    return this._http.get(this.uri);
  }

  CambioContrasena(req: CambioContrasena) {
    const cambioContrasena = { ...req };
    this.uri = `${this.endPoint}/ActualizarContrasena`;

    return this._http.post(this.uri, cambioContrasena);
  }

  ObtenerIdOperador() {
    if (!sessionStorage.getItem('token')) this.Logout();
    this._token = sessionStorage.getItem('token');
    if (this._token === MOCK_TOKEN) {
      return 1;
    }
    this.decodedToken = helper.decodeToken(this._token);
    return this.decodedToken[environment.schemes.id];
  }

  ObtenerDescriptionRole() {
    if (!sessionStorage.getItem('token')) this.Logout();
    this._token = sessionStorage.getItem('token');
    if (this._token === MOCK_TOKEN) {
      return 'Administrador';
    }
    this.decodedToken = helper.decodeToken(this._token);
    return this.decodedToken[environment.schemes.descriptionRole];
  }
}
