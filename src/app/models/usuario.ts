export interface Usuario {
  id: number;
  nombre: string;
  password: string;
  apPaterno: string;
  apMaterno: string;
  telefono: string;
  cargo: string;
  email: string;
  idRol: number;
  nombreRol: string;
  idEstadoUsuario: boolean;
  estado: string;
}

export interface UsuariosFiltro {
  idRol: number;
  idEstado: number;
}
