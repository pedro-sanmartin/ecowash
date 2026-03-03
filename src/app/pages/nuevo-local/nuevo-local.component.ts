import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DropDownList } from 'src/app/models/drop-down-list';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UtilsService } from 'src/app/services/utils.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Local, Servicio } from 'src/app/models/local';
import { LocalesService } from 'src/app/services/locales.service';

import Swal from 'sweetalert2';
import { Header } from '../../models/header';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-nuevo-local',
  templateUrl: './nuevo-local.component.html',
  styleUrls: ['./nuevo-local.component.css'],
})
export class NuevoLocalComponent implements OnInit {
  headerOptions: Header = {
    title: 'Nuevo local',
    url: '/locales',
    isBack: true,
    isNotificacion: false,
  };
  id: string;
  form: FormGroup;
  isEditar: boolean = false;
  ShowFilter = true;
  question: string = '';
  resultModal: string = '';
  btnName: string = '';

  local: Local = {} as Local;
  serviciosLocal: Servicio[] = [];
  regiones: DropDownList[] = [];
  provincias: DropDownList[] = [];
  provinciasPorRegion: DropDownList[] = [];
  comunas: DropDownList[] = [];
  comunasPorProvincia: DropDownList[] = [];
  servicios: DropDownList[] = [];
  operadores: DropDownList[] = [];
  jefesDeVenta: DropDownList[] = [];
  dropdownSettings: IDropdownSettings = {} as IDropdownSettings;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute,
    private _utilService: UtilsService,
    private _servicioService: ServiciosService,
    private _localService: LocalesService,
    private _validateService: ValidatorsService
  ) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.dropdownSettings = {
      idField: 'id',
      textField: 'nombre',
      singleSelection: false,
      selectAllText: 'Seleccionar Todos',
      unSelectAllText: 'Quitar Todos',
      allowSearchFilter: this.ShowFilter,
      enableCheckAll: true,
      limitSelection: -1,
      itemsShowLimit: 3,
      clearSearchFilter: true,
      maxHeight: 197,
      searchPlaceholderText: 'Buscar servicio',
      noDataAvailablePlaceholderText: 'No hay servicios',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: true,
      defaultOpen: false,
    };

    this.form = this.fb.group({
      nombre: [null, [Validators.required]],
      codigo: [null, [Validators.required]],
      idRegion: ['', [Validators.required]],
      idProvincia: ['', [Validators.required]],
      idComuna: ['', [Validators.required]],
      direccion: [null, [Validators.required]],
      mandante: [null, [Validators.required]],
      idJefeVentas: ['', [Validators.required]],
      idOperador: ['', [Validators.required]],
      valorGarantia: ['', [Validators.required]],
      servicios: ['', [Validators.required]],
      idEstado: ['1'],
    });

    this.obtenerRegiones();
    this.obtenerServicios();
    this.obtenerOperadores();
    this.obtenerJefesDeVenta();

    this.isEditar = this.id ? true : false;

    this.headerOptions.title = this.isEditar ? 'Editar local' : 'Nuevo local';
    this.resultModal = this.isEditar
      ? 'Local actualizado con éxito'
      : 'Local creado con éxito';
    this.question = this.isEditar
      ? '¿Está seguro que desea guardar los cambios?'
      : '¿Está seguro que desea crear un nuevo local?';

    this.btnName = this.isEditar ? 'Guardar' : 'Crear';

    if (this.isEditar) {
      this.obtenerLocalPorId(this.id);
    }
  }

  get formControl() {
    return this.form.controls;
  }

  obtenerLocalPorId(id: string) {
    this._localService.obtenerLocalPorId(id).subscribe({
      next: (resp: any) => {
        if (resp.success) {
          this.local = resp.result[0];
          this.form.setValue({
            nombre: this.local.nombre,
            codigo: this.local.codigo,
            idRegion: this.local.idRegion,
            idProvincia: '',
            idComuna: '',
            direccion: this.local.direccion,
            mandante: this.local.mandante,
            idJefeVentas: this.local.jefeVentas,
            idOperador: this.local.operador,
            valorGarantia: this._validateService.valueCurrency(
              this.local.valorGarantia.toString()
            ),
            servicios: this.local.servicios,
            idEstado: this.local.idEstadoLocal ? '1' : '0',
          });
        }

        this.servicioObtenerProvinciasPorIdRegion(this.local.idRegion);
        this.form.controls['idProvincia'].setValue(this.local.idProvincia);

        this.servicioObtenerComunasPoridProvincia(this.local.idProvincia);
        this.form.controls['idComuna'].setValue(this.local.idComuna);
      },
    });
  }

  obtenerServicios() {
    this._servicioService.obtenerServicios().subscribe({
      next: (resp: any) => {
        this.servicios = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  obtenerRegiones() {
    this._utilService.obtenerRegiones().subscribe({
      next: (resp: any) => {
        this.regiones = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  obtenerComunasPorProvincia(event) {
    const id = event.target.value;
    if (id === '' || id === undefined) {
      this.comunas = [];
      this.form.controls['idComuna'].setValue('');
      return;
    }

    this.servicioObtenerComunasPoridProvincia(id);
  }

  servicioObtenerComunasPoridProvincia(id: string) {
    this._utilService.obtenerComunasPorProvincia(id).subscribe({
      next: (resp: any) => {
        this.comunas = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  obtenerProvinciasPorRegion(event: any) {
    const id = event.target.value;

    if (id === '' || id === undefined) {
      this.provincias = [];
      this.comunas = [];
      this.form.controls['idProvincia'].setValue('');
      this.form.controls['idComuna'].setValue('');
      return;
    }

    this.servicioObtenerProvinciasPorIdRegion(id);
  }

  servicioObtenerProvinciasPorIdRegion(id: string) {
    this._utilService.obtenerProvinciasPorRegion(id).subscribe({
      next: (resp: any) => {
        this.provincias = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  obtenerOperadores() {
    this._utilService.obtenerOperadores().subscribe({
      next: (resp: any) => {
        this.operadores = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  obtenerJefesDeVenta() {
    this._utilService.obtenerJefesDeVenta().subscribe({
      next: (resp: any) => {
        this.jefesDeVenta = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  guardarLocal() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.local.id = this.local.id == undefined ? 0 : this.local.id;
    this.local.nombre = this.form.value.nombre;
    this.local.codigo = this.form.value.codigo;
    this.local.idComuna = this.form.value.idComuna;
    this.local.direccion = this.form.value.direccion;
    this.local.mandante = this.form.value.mandante;
    this.local.jefeVentas = this.form.value.idJefeVentas;
    this.local.operador = this.form.value.idOperador;
    this.local.valorGarantia = this.form.value.valorGarantia
      .toString()
      .replace(/[^0-9]/g, '');
    this.local.idEstadoLocal = this.form.value.idEstado;
    this.local.servicios = this.form.value.servicios.map((item) => {
      return item.id;
    });

    Swal.fire({
      title: 'Alerta',
      text: this.question,
      reverseButtons: true,
      showConfirmButton: true,
      confirmButtonText: this.btnName,
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
        this.servicioGuardarLocal();
      }
    });
  }

  servicioGuardarLocal() {
    this._localService.guardarLocal(this.local).subscribe({
      next: (resp: any) => {
        if (resp.success) {
          Swal.fire({
            imageUrl: '../../../assets/images/icon-ok.svg',
            text: this.resultModal,
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
          this.router.navigateByUrl('/locales');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ajusteMonto(event) {
    if (event.target.value)
      this.form.controls['valorGarantia'].setValue(
        this._validateService.valueCurrency(event.target.value)
      );
  }
}
