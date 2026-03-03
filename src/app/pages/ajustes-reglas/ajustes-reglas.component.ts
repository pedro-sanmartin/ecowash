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
  selector: 'app-ajustes-reglas',
  templateUrl: './ajustes-reglas.component.html',
  styleUrls: ['./ajustes-reglas.component.css']
})
export class AjustesReglasComponent implements OnInit {
  headerOptions:Header = {
    title: 'Ajustes',
    url: '/reglas',
    isBack: true,
    isNotificacion: false
  };
  id: string;
  saldoGarantia: number = 480000;
  form: FormGroup;
  dropdownList = [];
  selectedItems = [];
  ShowFilter = true;
  dropdownSettings: IDropdownSettings = {} as IDropdownSettings;
  operadores: DropDownList[] = [];
  locales: DropDownList[] = [];
  $obtenerLocales:any;
  ver = true;

  constructor(
    private fb: FormBuilder,
    private validators: ValidatorsService,
    private _utilService: UtilsService,
    private _localesService: LocalesService
  ) { }

  get idLocal() {
    return this.form.get('idLocal');
  }

  get planMensual() {
    return this.form.get('planMensual');
  }

  get planSemanal() {
    return this.form.get('planSemanal');
  }

  get ajustes() {
    return this.form.get('ajustes');
  }

  get fijarMonto() {
    return this.form.get('fijarMonto');
  }


  ngOnInit(): void {

    this.form = this.fb.group({
      idLocal: ['', [Validators.required]],
      planMensual: ['', [Validators.required]],
      planSemanal: ['', [Validators.required]],
      ajustes: ['', [Validators.required]],
      fijarMonto: ['', [Validators.required]],
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

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  cambiarAjuste(event:any){
    console.log(event);
    const id = event.target.value;
    if (id === '' || id === undefined) {
      this.ver = true;
      return;
    }else if (id === '1'){
      this.ver = true;
      return;
    }
    else if (id === '2'){
      this.ver = true;
      return;
    }
    else if (id === '3'){
      this.ver = !this.ver;
      return;
    }
  }


  showModal(){
/*     if (this.form.invalid) {
     return Object.values(this.form.controls).forEach((control) => {
       control.markAsTouched();
     });
   }  */
   Swal.fire({
     title: 'Alerta',
     text: '¿Desea guardar los cambios?',
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
   })/* .then((result) => {
     if (result.isConfirmed) {
       Swal.fire({
         imageUrl: '../../../assets/images/icon-ok.svg',
         text: '¡Cambio aplicado con éxito!',
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
   .then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        //icon: 'success',
        imageUrl: '../../../assets/images/icon-fail.svg',
        text: '¡El cambio no ha podido ser aplicado!',
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
