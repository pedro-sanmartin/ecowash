import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/models/servicio';
import { ServiciosService } from 'src/app/services/servicios.service';
import { ValidatorsService } from 'src/app/services/validators.service';

import Swal from 'sweetalert2';
import { Header } from '../../models/header';

@Component({
  selector: 'app-nuevo-servicio',
  templateUrl: './nuevo-servicio.component.html',
  styleUrls: ['./nuevo-servicio.component.css'],
})
export class NuevoServicioComponent implements OnInit {
  headerOptions: Header = {
    title: 'Nuevo Servicio',
    url: '/servicios',
    isBack: true,
    isNotificacion: false,
  };
  question: string = '';
  resultModal: string = '';
  btnName: string = '';
  id: string;
  valueCurrency: string;
  isEditar: boolean = false;
  servicio: Servicio = {} as Servicio;

  nuevoServicio$: any;
  editarServicio$: any;
  obtenerServicioPorId$: any;

  form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _aRouter: ActivatedRoute,
    private _servicioService: ServiciosService,
    private _validateService: ValidatorsService
  ) {
    this.id = this._aRouter.snapshot.paramMap.get('id');
  }

  get nombre() {
    return this.form.get('nombre');
  }

  get codigo() {
    return this.form.get('codigo');
  }

  get precio() {
    return this.form.get('precio');
  }

  ngOnInit(): void {
    this.form = this._fb.group({
      nombre: [null, [Validators.required]],
      codigo: [null, [Validators.required]],
      precio: [null, [Validators.required]],
      idEstado: ['1'],
    });

    this.isEditar = this.id ? true : false;

    this.headerOptions.title = this.isEditar
      ? 'Editar Servicio'
      : 'Nuevo Servicio';
    this.resultModal = this.isEditar
      ? 'Servicio actualizado con éxito'
      : 'Servicio creado con éxito';
    this.question = this.isEditar
      ? '¿Está seguro que desea guardar los cambios?'
      : '¿Está seguro que desea crear un nuevo servicio?';

    this.btnName = this.isEditar ? 'Guardar' : 'Crear';

    if (this.isEditar) {
      this._obtenerServicioPorId(this.id);
    }
  }

  ngOnDestroy(): void {
    if (this.isEditar) {
      this.obtenerServicioPorId$.unsubscribe();
    }
  }

  _obtenerServicioPorId(id: string) {
    this.obtenerServicioPorId$ = this._servicioService
      .obtenerServicioPorId(id)
      .subscribe({
        next: (resp: any) => {
          if (resp.success) {
            this.servicio = resp.result[0];
            this.form.setValue({
              nombre: this.servicio.nombre,
              codigo: this.servicio.codigo,
              precio: this._validateService.valueCurrency(
                this.servicio.precio.toString()
              ),
              idEstado: this.servicio.idEstadoServicio ? '1' : '0',
            });
          }
        },
        error: (error) => {
          this._router.navigateByUrl('/servicios');
          console.log(error);
        },
        complete() {},
      });
  }

  _guardarServicio(servicio: Servicio) {
    this.nuevoServicio$ = this._servicioService
      .guardarServicio(servicio)
      .subscribe({
        next: (resp: any) => {
          if (resp.success) {
            Swal.fire({
              //icon: 'success',
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

            this.nuevoServicio$.unsubscribe();
            this._router.navigateByUrl('/servicios');
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  guardarServicio() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.servicio.id = !this.isEditar ? 0 : this.servicio.id;
    this.servicio.nombre = this.form.value.nombre;
    this.servicio.codigo = this.form.value.codigo;
    this.servicio.precio = this.form.value.precio
      .toString()
      .replace(/[^0-9]/g, '');
    this.servicio.idEstadoServicio = this.form.value.idEstado;

    console.log(this.servicio);

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
        this._guardarServicio(this.servicio);
      }
    });
  }

  ajusteMonto(event) {
    if (event.target.value)
      this.form.controls['precio'].setValue(
        this._validateService.valueCurrency(event.target.value)
      );
  }
}
