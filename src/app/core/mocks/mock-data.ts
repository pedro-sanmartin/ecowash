import { Menu } from 'src/app/models/auth';
import { Usuario } from 'src/app/models/usuario';
import { Local } from 'src/app/models/local';
import { Servicio } from 'src/app/models/servicio';
import { PagoPendiente } from 'src/app/models/pago';
import { ValidarCambioContrasena } from 'src/app/models/auth';

/** Token usado cuando el login es mock. AuthService lo detecta y devuelve id/rol fijos. */
export const MOCK_TOKEN = 'mock-jwt-token-demo';

/** Credenciales de demo para modo mock. */
export const DEMO_EMAIL = 'demo@example.com';
export const DEMO_PASSWORD = 'Demo123';

export const MOCK_MENUS: Menu[] = [
  { id: 1, nombre: 'Servicios', url: '/servicios', icon: 'package' },
  { id: 2, nombre: 'Usuarios', url: '/usuarios', icon: 'users' },
  { id: 3, nombre: 'Locales', url: '/locales', icon: 'map-pin' },
  { id: 4, nombre: 'Reglas', url: '/reglas', icon: 'file-text' },
  { id: 5, nombre: 'Pagos', url: '/pagos', icon: 'dollar-sign' },
  { id: 6, nombre: 'Pagar', url: '/pagar', icon: 'credit-card' },
  { id: 7, nombre: 'Historial de pagos', url: '/historial-pagos', icon: 'calendar' },
  { id: 8, nombre: 'Enviar notificación', url: '/enviar-notificacion', icon: 'send' },
  { id: 9, nombre: 'Reportes', url: '/reporte', icon: 'bar-chart-2' },
  { id: 10, nombre: 'Descuentos', url: '/descuentos', icon: 'percent' },
];

export const MOCK_USUARIOS: Usuario[] = [
  {
    id: 1,
    nombre: 'Admin',
    apPaterno: 'Demo',
    apMaterno: 'Sistema',
    email: 'demo@example.com',
    telefono: '912345678',
    cargo: 'Administrador',
    idRol: 1,
    nombreRol: 'Administrador',
    idEstadoUsuario: true,
    estado: 'Activo',
    password: '',
  },
  {
    id: 2,
    nombre: 'Juan',
    apPaterno: 'Pérez',
    apMaterno: 'López',
    email: 'operador@example.com',
    telefono: '987654321',
    cargo: 'Operador',
    idRol: 2,
    nombreRol: 'Operador',
    idEstadoUsuario: true,
    estado: 'Activo',
    password: '',
  },
  {
    id: 3,
    nombre: 'María',
    apPaterno: 'González',
    apMaterno: 'Soto',
    email: 'jefe.ventas@example.com',
    telefono: '976543210',
    cargo: 'Jefe de ventas',
    idRol: 3,
    nombreRol: 'Jefe de ventas',
    idEstadoUsuario: true,
    estado: 'Activo',
    password: '',
  },
];

export const MOCK_SERVICIOS: Servicio[] = [
  { id: 1, nombre: 'Lavado básico', codigo: 'LB001', precio: 5000, idEstadoServicio: true },
  { id: 2, nombre: 'Lavado premium', codigo: 'LP002', precio: 8500, idEstadoServicio: true },
  { id: 3, nombre: 'Lavado ecológico', codigo: 'LE003', precio: 7200, idEstadoServicio: true },
];

export const MOCK_LOCALES: Local[] = [
  {
    id: 1,
    codigo: 'LOC001',
    nombre: 'Sucursal Centro',
    direccion: 'Av. Principal 100',
    mandante: 'Empresa demo',
    idRegion: '1',
    idProvincia: '1',
    idComuna: 1,
    operador: 2,
    nombreOperador: 'Juan Pérez López',
    jefeVentas: 3,
    nombreJefeVentas: 'María González Soto',
    valorGarantia: 500000,
    servicios: [{ idServicio: 1 }, { idServicio: 2 }],
    idEstadoLocal: true,
  },
  {
    id: 2,
    codigo: 'LOC002',
    nombre: 'Sucursal Norte',
    direccion: 'Calle Norte 200',
    mandante: 'Empresa demo',
    idRegion: '1',
    idProvincia: '1',
    idComuna: 2,
    operador: 2,
    nombreOperador: 'Juan Pérez López',
    jefeVentas: 3,
    nombreJefeVentas: 'María González Soto',
    valorGarantia: 450000,
    servicios: [{ idServicio: 1 }, { idServicio: 3 }],
    idEstadoLocal: true,
  },
];

export const MOCK_PAGOS_PENDIENTES: PagoPendiente[] = [
  {
    id: 1,
    codigoVoucher: 1001,
    fechaPago: new Date('2025-02-15'),
    montoAbono: '50000',
    idLocal: 1,
    nombreLocal: 'Sucursal Centro',
    codigoLocal: 'LOC001',
    idEstadoAprobacion: 1,
    estadoAprobacion: 'Pendiente',
    idTipoAbono: 1,
    nombreTipoAbono: 'Mensual',
  },
];

/** Listas para utils (DropDownList: id, nombre) */
export const MOCK_REGIONES = [
  { id: 1, nombre: 'Metropolitana' },
  { id: 2, nombre: 'Valparaíso' },
];

export const MOCK_PROVINCIAS = [
  { id: 1, nombre: 'Santiago' },
  { id: 2, nombre: 'Cordillera' },
];

export const MOCK_COMUNAS = [
  { id: 1, nombre: 'Santiago Centro' },
  { id: 2, nombre: 'Providencia' },
  { id: 3, nombre: 'Las Condes' },
];

export const MOCK_ROLES = [
  { id: 1, nombre: 'Administrador' },
  { id: 2, nombre: 'Operador' },
  { id: 3, nombre: 'Jefe de ventas' },
];

export const MOCK_MESES = [
  { id: 1, nombre: 'Enero' },
  { id: 2, nombre: 'Febrero' },
  { id: 3, nombre: 'Marzo' },
  { id: 4, nombre: 'Abril' },
  { id: 5, nombre: 'Mayo' },
  { id: 6, nombre: 'Junio' },
  { id: 7, nombre: 'Julio' },
  { id: 8, nombre: 'Agosto' },
  { id: 9, nombre: 'Septiembre' },
  { id: 10, nombre: 'Octubre' },
  { id: 11, nombre: 'Noviembre' },
  { id: 12, nombre: 'Diciembre' },
];

export const MOCK_METODOS_PAGO = [
  { id: 1, nombre: 'Efectivo' },
  { id: 2, nombre: 'Transferencia' },
  { id: 3, nombre: 'Tarjeta' },
];

export const MOCK_TIPOS_ABONO = [
  { id: 1, nombre: 'Mensual' },
  { id: 2, nombre: 'Trimestral' },
];

export const MOCK_FORMAS_TRABAJO = [
  { id: 1, nombre: 'Presencial' },
  { id: 2, nombre: 'Remoto' },
];

export const MOCK_TIPOS_DESCUENTO = [
  { id: 1, nombre: 'Por volumen' },
  { id: 2, nombre: 'Promocional' },
];

export const MOCK_ANNIOS = [
  { id: 2024, nombre: '2024' },
  { id: 2025, nombre: '2025' },
];

/** Respuesta genérica success + result para listas */
export function mockSuccessResult<T>(result: T): { success: true; result: T } {
  return { success: true, result };
}

/** ValidarCambioContrasena devuelve un objeto ValidarCambioContrasena */
export const MOCK_VALIDAR_CAMBIO_CONTRASENA: ValidarCambioContrasena = {
  id: 1,
  codigo: 'mock-token',
  fechaCreacion: new Date(),
  fechaExpiracion: new Date(Date.now() + 86400000),
  idUsuario: 1,
  email: DEMO_EMAIL,
  estado: true,
};
