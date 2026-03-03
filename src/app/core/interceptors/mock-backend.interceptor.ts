import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  MOCK_TOKEN,
  DEMO_EMAIL,
  DEMO_PASSWORD,
  MOCK_MENUS,
  MOCK_USUARIOS,
  MOCK_LOCALES,
  MOCK_SERVICIOS,
  MOCK_PAGOS_PENDIENTES,
  MOCK_REGIONES,
  MOCK_PROVINCIAS,
  MOCK_COMUNAS,
  MOCK_ROLES,
  MOCK_MESES,
  MOCK_METODOS_PAGO,
  MOCK_TIPOS_ABONO,
  MOCK_FORMAS_TRABAJO,
  MOCK_TIPOS_DESCUENTO,
  MOCK_ANNIOS,
  mockSuccessResult,
  MOCK_VALIDAR_CAMBIO_CONTRASENA,
} from '../mocks/mock-data';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!environment.useMock || !request.url.startsWith(environment.urlBase)) {
      return next.handle(request);
    }

    const url = request.url;
    const method = request.method;
    const body = request.body as any;

    // --- Auth ---
    if (url.includes(environment.urlBaseAuth)) {
      if (url.endsWith('/Login') && method === 'POST') {
        const email = body?.email;
        const password = body?.password;
        if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
          return of(
            new HttpResponse({
              status: 200,
              body: {
                success: true,
                result: { token: MOCK_TOKEN },
                menus: MOCK_MENUS,
              },
            })
          );
        }
        return of(
          new HttpResponse({
            status: 200,
            body: { success: false, message: 'Credenciales incorrectas' },
          })
        );
      }
      if (url.includes('RecuperarContrasena') && method === 'POST') {
        return of(
          new HttpResponse({
            status: 200,
            body: { success: true, message: 'Correo enviado' },
          })
        );
      }
      if (url.includes('ValidarCambioContrasena') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: {
              success: true,
              result: MOCK_VALIDAR_CAMBIO_CONTRASENA,
            },
          })
        );
      }
      if (url.includes('ActualizarContrasena') && method === 'POST') {
        return of(
          new HttpResponse({
            status: 200,
            body: { success: true, message: 'Contraseña actualizada' },
          })
        );
      }
    }

    // --- Usuarios ---
    if (url.includes(environment.urlBaseUsuarios)) {
      if (url.includes('ObtenerUsuarios') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_USUARIOS),
          })
        );
      }
      if (url.includes('ObtenerUsuarioPorId') && method === 'GET') {
        const id = this.getParam(url, 'idUsuario');
        const user = MOCK_USUARIOS.find((u) => u.id === +(id || 0));
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(user ? [user] : []),
          })
        );
      }
      if (url.includes('AgregarUsuario') && method === 'POST') {
        return of(
          new HttpResponse({
            status: 200,
            body: { success: true, message: 'Usuario creado' },
          })
        );
      }
      if (url.includes('ActualizarUsuario') && method === 'PUT') {
        return of(
          new HttpResponse({
            status: 200,
            body: { success: true, message: 'Usuario actualizado' },
          })
        );
      }
    }

    // --- Locales ---
    if (url.includes(environment.urlBaseLocales)) {
      if (url.includes('ObtenerLocales') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_LOCALES),
          })
        );
      }
      if (url.includes('ObtenerLocalPorId') && method === 'GET') {
        const id = this.getParam(url, 'idLocal');
        const local = MOCK_LOCALES.find((l) => l.id === +(id || 0));
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(local ? [local] : []),
          })
        );
      }
      if (url.includes('AgregarLocal') && method === 'POST') {
        return of(
          new HttpResponse({
            status: 200,
            body: { success: true, result: MOCK_LOCALES[0], message: 'Local creado' },
          })
        );
      }
      if (url.includes('ActualizarLocal') && method === 'PUT') {
        return of(
          new HttpResponse({
            status: 200,
            body: { success: true, result: MOCK_LOCALES[0], message: 'Local actualizado' },
          })
        );
      }
    }

    // --- Servicios ---
    if (url.includes(environment.urlBaseServicios)) {
      if (url.includes('obtenerServicios') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_SERVICIOS),
          })
        );
      }
      if (url.includes('obtenerServicioPorId') && method === 'GET') {
        const id = this.getParam(url, 'idServicio');
        const servicio = MOCK_SERVICIOS.find((s) => s.id === +(id || 0));
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(servicio ? [servicio] : []),
          })
        );
      }
      if (url.includes('agregarServicio') && method === 'POST') {
        return of(
          new HttpResponse({
            status: 200,
            body: { success: true, message: 'Servicio creado' },
          })
        );
      }
      if (url.includes('actualizarServicio') && method === 'PUT') {
        return of(
          new HttpResponse({
            status: 200,
            body: { success: true, message: 'Servicio actualizado' },
          })
        );
      }
    }

    // --- Pago ---
    if (url.includes(environment.urlBasePago)) {
      if (url.includes('AgregarPago') && method === 'POST') {
        return of(
          new HttpResponse({
            status: 200,
            body: { success: true, message: 'Pago registrado' },
          })
        );
      }
      if (url.includes('ObtenerPagoRegistradoPorOperador') && method === 'POST') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_PAGOS_PENDIENTES),
          })
        );
      }
    }

    // --- Utils ---
    if (url.includes(environment.urlBaseUtils)) {
      if (url.includes('ObtenerRegiones') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_REGIONES),
          })
        );
      }
      if (url.includes('ObtenerProvinciasPorIdRegion') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_PROVINCIAS),
          })
        );
      }
      if (url.includes('ObtenerComunasPorIdProvincia') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_COMUNAS),
          })
        );
      }
      if (url.includes('ObtenerComunasPorIdRegion') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_COMUNAS),
          })
        );
      }
      if (url.includes('ObtenerRoles') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_ROLES),
          })
        );
      }
      if (url.includes('ObtenerUsuariosPorIdRol') && method === 'GET') {
        const idRol = this.getParam(url, 'idRol');
        const list = MOCK_USUARIOS.filter((u) => u.idRol === +(idRol || 0))
          .map((u) => ({ id: u.id, nombre: `${u.nombre} ${u.apPaterno} ${u.apMaterno}` }));
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(list),
          })
        );
      }
      if (url.includes('ObtenerMes') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_MESES),
          })
        );
      }
      if (url.includes('ObtenerMetodosPago') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_METODOS_PAGO),
          })
        );
      }
      if (url.includes('ObtenerTipoAbono') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_TIPOS_ABONO),
          })
        );
      }
      if (url.includes('ObtenerFormasTrabajo') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_FORMAS_TRABAJO),
          })
        );
      }
      if (url.includes('ObtenerTipoDescuento') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_TIPOS_DESCUENTO),
          })
        );
      }
      if (url.includes('ObtenerLocalesPorIdOperador') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_LOCALES),
          })
        );
      }
      if (url.includes('ObtenerAnniosPagos') && method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: mockSuccessResult(MOCK_ANNIOS),
          })
        );
      }
    }

    return next.handle(request);
  }

  private getParam(url: string, key: string): string | null {
    const i = url.indexOf('?');
    if (i === -1) return null;
    const params = new URLSearchParams(url.slice(i));
    return params.get(key);
  }
}
