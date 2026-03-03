export interface ResponseServicio {
  success: boolean;
  message: string;
  result: Servicio;
}

export interface Servicio {
  id: number;
  nombre: string;
  codigo: string;
  precio: number;
  idEstadoServicio: boolean;
}
