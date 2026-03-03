import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DropDownList } from 'src/app/models/drop-down-list';
import { Submenu } from '../../models/submenu';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogRevisionPagosComponent } from '../../components/dialog-revision-pagos/dialog-revision-pagos.component';
import { AuthService } from 'src/app/services/auth.service';
import { PagoService } from 'src/app/services/pago.service';
import { PagoPendiente, PagoPendienteReq, FiltroPagos } from 'src/app/models/pago';
import { Header } from '../../models/header';


@Component({
  selector: 'app-pagos-pendientes',
  templateUrl: './pagos-pendientes.component.html',
  styleUrls: ['./pagos-pendientes.component.css']
})
export class PagosPendientesComponent implements OnInit {
  filtroPagos: FiltroPagos = {} as FiltroPagos;

  message: string = 'No se encontraron registros de pago';
  headerOptions:Header = {
    title: 'Pagar',
    url: '/inicio',
    isBack: true,
    isNotificacion: false
  };

  submenu: Submenu[] = [
    {
      title: 'Realizar pago',
      url: '/pagar/realizar-pago',
      active: false
    },
    {
      title: 'Pagos pendientes',
      url: '/pagar/pagos-pendientes',
      active: false
    }
  ];
  id: string;
  dropdownList = [];
  ShowFilter = true;

  dropdownSettings: IDropdownSettings = {} as IDropdownSettings;
  pagoPendienteReq:PagoPendienteReq = {} as PagoPendienteReq;

  dialogRevisionPagosComponent: MatDialogRef<DialogRevisionPagosComponent>;

  locales: DropDownList[] = [];
  annios: DropDownList[] = [];
  pagos: PagoPendiente[] =[];

  obsPagos$:any;

  constructor(
    private _pagoService: PagoService,
    private _authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.pagoPendienteReq = {
      mes: new Date().getMonth() + 1,
      annio: new Date().getFullYear(),
      idOperador: this._authService.ObtenerIdOperador(),
      idLocal: '0'
    }
    this.obtenerPagosPendientes(this.pagoPendienteReq, this.filtroPagos, false);
  }

  ngOnDestroy(): void {
    this.obsPagos$.unsubscribe();
  }

  obtenerPagosPendientes(pago: PagoPendienteReq, filter:FiltroPagos, isFilter:boolean) {

    this.obsPagos$ = this._pagoService.ObtenerRegistrosDePagoPorOperador(pago).subscribe({
      next: (resp: any) => {
        if (isFilter) {
          this.pagos = [];
          this.pagos = resp.result.filter(p => p.idEstadoAprobacion == filter.idEstado && p.idTipoAbono == filter.tipoAbono);
        } else this.pagos = resp.result;   
      },
      error:(err) => {
        this.pagos = [];
        console.log(err);
      }
    });
  }

  openDialog() {

    this.dialogRevisionPagosComponent = this.dialog.open(DialogRevisionPagosComponent);

    this.dialogRevisionPagosComponent.afterClosed().subscribe({
      next: (resp:any) => {

        this.filtroPagos = resp;

        if (this.filtroPagos.limpiarFiltro) {
          this.pagoPendienteReq = {
            mes: new Date().getMonth() + 1,
            annio: new Date().getFullYear(),
            idOperador: this._authService.ObtenerIdOperador(),
            idLocal: '0'
          }

          this.obtenerPagosPendientes(this.pagoPendienteReq, this.filtroPagos, false);
        }

        const _annio = parseInt(this.filtroPagos.annio) || new Date().getFullYear();
        const _month = parseInt(this.filtroPagos.meses) || new Date().getMonth() + 1;
        
        this.pagoPendienteReq = {
          mes: _month,
          annio: _annio,
          idOperador: this._authService.ObtenerIdOperador(),
          idLocal: this.filtroPagos.idLocal || '0'
        }

        this.obtenerPagosPendientes(this.pagoPendienteReq, this.filtroPagos, true);
      },
      error: err => {
        console.log(err);
      }
    });  
  }
}
