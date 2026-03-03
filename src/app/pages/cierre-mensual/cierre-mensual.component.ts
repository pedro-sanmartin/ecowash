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
  selector: 'app-cierre-mensual',
  templateUrl: './cierre-mensual.component.html',
  styleUrls: ['./cierre-mensual.component.css']
})
export class CierreMensualComponent implements OnInit {
  headerOptions:Header = {
    title: 'Cierre mensual',
    url: '/reglas',
    isBack: true,
    isNotificacion: false
  }
  id: string;
  form: FormGroup;
  locales: DropDownList[] = [];

  constructor(
    private fb: FormBuilder,
    private validators: ValidatorsService,
    private _utilService: UtilsService,
    private _localesService: LocalesService
  ) { }


  get planMensual() {
    return this.form.get('planMensual');
  }

  get fechaCierre() {
    return this.form.get('fechaCierre');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      planMensual: ['', [Validators.required]],
      fechaCierre: [null, [Validators.required]],
    });
  }

  get formControl() {
    return this.form.controls;
  }

  showModal(){
    /*     if (this.form.invalid) {
         return Object.values(this.form.controls).forEach((control) => {
           control.markAsTouched();
         });
       }  */
       Swal.fire({
         title: 'Alerta',
         text: '¿Desea generar el cierre?',
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
           Swal.fire({
             //icon: 'success',
             imageUrl: '../../../assets/images/icon-ok.svg',
             text: '¡Se ha generado el cierre!',
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
       });
     }

}
