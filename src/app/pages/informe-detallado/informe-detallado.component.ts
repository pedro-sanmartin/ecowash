import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownList } from 'src/app/models/drop-down-list';
import { UtilsService } from 'src/app/services/utils.service';
import { LocalesService } from '../../services/locales.service';
import { ValidatorsService } from 'src/app/services/validators.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogInformeDetalladoComponent } from '../../components/dialog-informe-detallado/dialog-informe-detallado.component';

import { Submenu } from 'src/app/models/submenu';

import Swal from 'sweetalert2';
import { Header } from '../../models/header';


@Component({
  selector: 'app-informe-detallado',
  templateUrl: './informe-detallado.component.html',
  styleUrls: ['./informe-detallado.component.css']
})
export class InformeDetalladoComponent implements OnInit {

  headerOptions:Header = {
    title: 'Reportes',
    url: '/inicio',
    isBack: true,
    isNotificacion: false
  }
  id: string;
  form: FormGroup;

  submenu: Submenu[] = [
    {
      title: 'Informe consolidado',
      url: '/reporte/informe-consolidado',
      active: false,
    },
    {
      title: 'Informe detallado',
      url: '/reporte/informe-detallado',
      active: false,
    },
  ];

  ShowFilter = true;

  constructor(
    private fb: FormBuilder,
    private validators: ValidatorsService,
    private _utilService: UtilsService,
    private _localesService: LocalesService,
    private dialog: MatDialog
  ) { }

  get ventas() {
    return this.form.get('ventas');
  }



  ngOnInit(): void {
    this.form = this.fb.group({
      ventas: ['', [Validators.required]],
    });
  }

  get formControl() {
    return this.form.controls;
  }

  openDialog() {
    this.dialog.open(DialogInformeDetalladoComponent, {
      minWidth: '300px',
/*       data: {
        animal: 'unicorn',
      }, */
    });
  }

  showModal(){
    Swal.fire({
      text: '¿Desea guardar los cambios?',
      html:
      '<div class="bs-container-input div2Col"><div class="divA"><label>Fecha</label><div class="input__icon mt-10 mb-10"><select class="bs-input-border" formControlName="mes"><option value="">Mes</option><option >Septiembre</option><option >Octubre</option><option >Noviembre</option></select></div></div><div class="divB"><label>&nbsp;</label><div class="input__icon mt-10 mb-10"><select class="bs-input-border" formControlName="año"><option value="">Año</option><option >2020</option><option >2021</option><option >2022</option></select></div></div></div>',
      inputLabel:'Locales',
      input: 'select',
      inputOptions: {
          apples: 'Providencia',
          bananas: 'Santiago',
          grapes: 'Macul'
      },
      inputPlaceholder: 'Seleccionar',
      reverseButtons: true,
      showConfirmButton: true,
      confirmButtonText: 'Filtrar',
      padding: '1rem 0',
      width: '296',
      customClass: {
        popup: 'bs-modal',
        htmlContainer: 'bs-text',
        confirmButton: 'bs-button bs-button-primary',
        cancelButton: 'bs-button bs-button-secondary',
        title: 'bs-title',
        input: 'bs-input-border',
      },
    })
  }

}
