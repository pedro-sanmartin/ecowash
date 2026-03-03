export interface AuthResponse {
  success: boolean;
  message: string;
  result: Result;
  menus: Menu[];
}

export interface Result {
  token: string;
}

export interface Menu {
  id: number;
  nombre: string;
  url: string;
  icon: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface CambioContrasena {
  email: string;
  password: string;
  token: string;
  idUsuario: number;
}

export interface ValidarCambioContrasena {
  id: number;
  codigo: string;
  fechaCreacion: Date;
  fechaExpiracion: Date;
  idUsuario: number;
  email: string;
  estado: boolean;
}
