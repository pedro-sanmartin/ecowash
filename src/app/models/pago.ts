export interface AgregarPago {
  codigoVoucher: number;
  fechaPago: string;
  montoAbono: string;
  idOperador: number;
  idMetodoPago: number;
  idTipoAbono: number;
  comprobantePago: string;
  extensionComprobantePago: string;
  comprobanteVenta: string;
  extensionComprobanteVenta: string;
  idLocal: number;
}

export interface PagoPendiente {
  id:number;
  codigoVoucher: number;
  fechaPago: Date;
  montoAbono: string;
  idLocal: number;
  nombreLocal: string;
  codigoLocal: string;
  idEstadoAprobacion: number;
  estadoAprobacion: string;
  idTipoAbono: number;
  nombreTipoAbono: string;
}

export interface PagoPendienteReq {
  idOperador: string;
  idLocal: string;
  mes: number;
  annio: number;
}

export interface FiltroPagos {
  idLocal: string,
  meses: string,
  annio: string,
  idEstado: string,
  tipoAbono: string,
  limpiarFiltro: boolean
}

