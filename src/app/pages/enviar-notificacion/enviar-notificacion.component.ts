import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownList } from 'src/app/models/drop-down-list';
import { UtilsService } from 'src/app/services/utils.service';
import { LocalesService } from '../../services/locales.service';
import { ValidatorsService } from 'src/app/services/validators.service';

import Swal from 'sweetalert2';
import { Header } from '../../models/header';

@Component({
  selector: 'app-enviar-notificacion',
  templateUrl: './enviar-notificacion.component.html',
  styleUrls: ['./enviar-notificacion.component.css']
})
export class EnviarNotificacionComponent implements OnInit {

  headerOptions:Header = {
    title: 'Enviar notificación',
    url: '/inicio',
    isBack: true,
    isNotificacion: false
  }
  id: string;
  form: FormGroup;

  ShowFilter = true;

  locales: DropDownList[] = [];
  $obtenerLocales:any;

  constructor(
    private fb: FormBuilder,
    private validators: ValidatorsService,
    private _utilService: UtilsService,
    private _localesService: LocalesService
  ) { }

  get idLocal() {
    return this.form.get('idLocal');
  }

  get categoria() {
    return this.form.get('categoria');
  }

  get comentario() {
    return this.form.get('comentario');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      categoria: ['', [Validators.required]],
      idLocal: ['', [Validators.required]],
      comentario: ['', [Validators.required]],
    });

    this.obtenerLocales();
  }

  ngOnDestroy(): void {
    this.$obtenerLocales.unsubscribe();
  }

  obtenerLocales() {
    this.$obtenerLocales = this._localesService.obtenerLocales().subscribe({
      next: (resp: any) => {
        this.locales = resp.result;
      },
      error:(err) => {
        console.log(err);
      }
    });
  }

  get formControl() {
    return this.form.controls;
  }


  showModal(){
     if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    } 
    Swal.fire({
      /* title: 'Alerta', */
      imageUrl: '../../../assets/images/icon-ok.svg',
      text: '¡Mensaje enviado con éxito!',
      reverseButtons: true,
      showConfirmButton: true,
      confirmButtonText: 'Volver',
/*       showCancelButton: true,
      cancelButtonText: 'Volver', */
      padding: '1rem 0',
      width: '296',
      customClass: {
        popup: 'bs-modal',
        htmlContainer: 'bs-text',
        confirmButton: 'bs-button bs-button-primary',
        cancelButton: 'bs-button bs-button-secondary',
        title: 'bs-title',
      },
    })/* .then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          //icon: 'success',
          imageUrl: '../../../assets/images/icon-ok.svg',
          text: 'Se ha guardado con éxito',
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
        })
      }
    }); */
  }

}
