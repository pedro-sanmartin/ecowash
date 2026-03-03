export interface Local {
  id: number;
  codigo: string;
  nombre: string;
  direccion: string;
  mandante: string;
  idProvincia: string;
  idRegion: string;
  idComuna: number;
  operador: number;
  nombreOperador: string;
  jefeVentas: number;
  nombreJefeVentas: string;
  valorGarantia: number;
  servicios: Servicio[];
  idEstadoLocal: boolean;
}

export interface Servicio {
  idServicio: number;
}

export interface LocalFiltro {
  idComuna: number;
  idLocal: number;
  idRegion: number;
}
