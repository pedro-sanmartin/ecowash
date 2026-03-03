import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownList } from 'src/app/models/drop-down-list';
import { UtilsService } from 'src/app/services/utils.service';
import { Submenu } from '../../models/submenu';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { AgregarPago } from 'src/app/models/pago';
import { PagoService } from 'src/app/services/pago.service';
import { Header } from '../../models/header';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-realizar-pago',
  templateUrl: './realizar-pago.component.html',
  styleUrls: ['./realizar-pago.component.css'],
})
export class RealizarPagoComponent implements OnInit {
  headerOptions: Header = {
    title: 'Pagar',
    url: '',
    isBack: true,
    isNotificacion: false,
  };

  agregarPago: AgregarPago = {} as AgregarPago;

  imagen64Pago: string;
  imagen64Venta: string;

  fileNamePago: string;
  fileNameVenta: string;

  isFilePago: boolean = false;
  isFileVenta: boolean = false;

  listaLocales: DropDownList[] = [];
  listaMeses: DropDownList[] = [];
  listaMetodosPago: DropDownList[] = [];
  listaTiposAbono: DropDownList[] = [];

  agregarPago$: any;
  listaLocales$: any;
  listaMeses$: any;
  listaMetodosPago$: any;
  listaTiposAbono$: any;

  submenu: Submenu[] = [
    {
      title: 'Realizar pago',
      url: '/pagar/realizar-pago',
      active: false,
    },
    {
      title: 'Pagos pendientes',
      url: '/pagar/pagos-pendientes',
      active: false,
    },
  ];
  id: string;
  form: FormGroup;
  dropdownList = [];
  selectedItems = [];
  ShowFilter = true;
  dropdownSettings: IDropdownSettings = {} as IDropdownSettings;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _utilService: UtilsService,
    private _authService: AuthService,
    private _pagoService: PagoService,
    private _validateService: ValidatorsService
  ) {}

  get formControl() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      idLocal: ['', [Validators.required]],
      meses: ['', [Validators.required]],
      fechaPago: [null, [Validators.required]],
      codigoVoucher: ['', [Validators.required]],
      metodoPago: ['', [Validators.required]],
      tipoAbono: ['', [Validators.required]],
      comprobantePago: ['', [Validators.required]],
      archivoVentas: ['', [Validators.required]],
      fijarMonto: ['', [Validators.required]],
    });

    this.obtenerLocalesPorIdOperador(this._authService.ObtenerIdOperador());
    this.obtenerMes();
    this.obtenerMetodosPago();
    this.obtenerTiposAbono();
  }

  ngOnDestroy(): void {
    this.listaLocales$.unsubscribe();
    this.listaMeses$.unsubscribe();
    this.listaMetodosPago$.unsubscribe();
    this.listaTiposAbono$.unsubscribe();
  }

  obtenerLocalesPorIdOperador(id: string) {
    this.listaLocales$ = this._utilService
      .obtenerLocalesPorIdOperador(id)
      .subscribe({
        next: (resp: any) => {
          this.listaLocales = resp.result;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  obtenerMes() {
    this.listaMeses$ = this._utilService.obtenerMes().subscribe({
      next: (resp: any) => {
        this.listaMeses = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  obtenerMetodosPago() {
    this.listaMetodosPago$ = this._utilService.obtenerMetodosPago().subscribe({
      next: (resp: any) => {
        this.listaMetodosPago = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  obtenerTiposAbono() {
    this.listaTiposAbono$ = this._utilService.obtenerTipoAbono().subscribe({
      next: (resp: any) => {
        this.listaTiposAbono = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  servicioAgregarPago() {
    this.agregarPago$ = this._pagoService
      .AgregarPago(this.agregarPago)
      .subscribe({
        next: (resp: any) => {
          if (resp.success) {
            Swal.fire({
              //icon: 'success',
              imageUrl: '../../../assets/images/icon-ok.svg',
              text: '¡Pago realizado con éxito!',
              showConfirmButton: true,
              confirmButtonText: 'Volver',
              padding: '1rem 0',
              width: '296',
              customClass: {
                popup: 'bs-modal',
                htmlContainer: 'bs-text',
                confirmButton: 'bs-button bs-button-primary',
                cancelButton: 'bs-button bs-button-secondary',
                title: 'bs-title',
                icon: 'bs-icon-modal',
              },
            });

            this._router.navigateByUrl('/inicio');
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  nuevoPago() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.agregarPago.codigoVoucher = this.form.value.codigoVoucher;
    this.agregarPago.fechaPago = this.form.value.fechaPago;
    this.agregarPago.idLocal = this.form.value.idLocal;
    this.agregarPago.idMetodoPago = this.form.value.metodoPago;
    this.agregarPago.idTipoAbono = this.form.value.tipoAbono;
    this.agregarPago.idOperador = this._authService.ObtenerIdOperador();
    this.agregarPago.montoAbono = this.form.value.fijarMonto
      .toString()
      .replace(/[^0-9]/g, '');

    Swal.fire({
      title: 'Alerta',
      text: '¿Desea realizar el pago?',
      reverseButtons: true,
      showConfirmButton: true,
      confirmButtonText: 'Guardar',
      showCancelButton: true,
      cancelButtonText: 'Volver',
      padding: '1rem 0',
      width: '296',
      customClass: {
        popup: 'bs-modal',
        htmlContainer: 'bs-text',
        confirmButton: 'bs-button bs-button-primary',
        cancelButton: 'bs-button bs-button-secondary',
        title: 'bs-title',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioAgregarPago();
      }
    });
  }

  obtenerImagenPago(e) {
    if (e.target.files.length > 0 && e.target.files[0].type.startsWith('image'))
      this.convertFile(e.target.files[0]).subscribe({
        next: (base64: any) => {
          this.agregarPago.comprobantePago = base64;
          this.isFilePago = true;
          const file = e.target.files[0];
          this.fileNamePago = file.name;
          this.agregarPago.extensionComprobantePago = file.type.replace(
            'image/',
            ''
          );
        },
        error: (err) => console.log(err),
      });
    else this.isFilePago = false;
  }

  obtenerImagenVenta(e) {
    if (e.target.files.length > 0 && e.target.files[0].type.startsWith('image'))
      this.convertFile(e.target.files[0]).subscribe({
        next: (base64: any) => {
          this.agregarPago.comprobanteVenta = base64;
          this.isFileVenta = true;
          const file = e.target.files[0];
          this.fileNameVenta = file.name;
          this.agregarPago.extensionComprobanteVenta = file.type.replace(
            'image/',
            ''
          );
        },
        error: (err) => console.log(err),
      });
    else this.isFileVenta = false;
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) =>
      result.next(btoa(event.target.result.toString()));
    return result;
  }

  ajusteMonto(event) {
    if (event.target.value)
      this.form.controls['fijarMonto'].setValue(
        this._validateService.valueCurrency(event.target.value)
      );
  }
}
