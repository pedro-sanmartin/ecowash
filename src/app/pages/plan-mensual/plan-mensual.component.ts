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
  selector: 'app-plan-mensual',
  templateUrl: './plan-mensual.component.html',
  styleUrls: ['./plan-mensual.component.css']
})
export class PlanMensualComponent implements OnInit {

  headerOptions:Header = {
    title: 'Plan mensual',
    url: '/reglas',
    isBack: true,
    isNotificacion: false
  };
  id: string;
  form: FormGroup;
  dropdownList = [];
  selectedItems = [];
  ShowFilter = true;
  dropdownSettings: IDropdownSettings = {} as IDropdownSettings;
  operadores: DropDownList[] = [];
  locales: DropDownList[] = [];
  $obtenerLocales:any;
  $obtenerOperadores:any;

  constructor(
    private fb: FormBuilder,
    private validators: ValidatorsService,
    private _utilService: UtilsService,
    private _localesService: LocalesService
    ) {}

    get idLocal() {
      return this.form.get('idLocal');
    }

    get idOperador() {
      return this.form.get('idOperador');
    }

    get planMensual() {
      return this.form.get('planMensual');
    }

    get fechaInicio() {
      return this.form.get('fechaInicio');
    }

    get fechaTermino() {
      return this.form.get('fechaTermino');
    }

    get valorMensual() {
      return this.form.get('valorMensual');
    }

    get valorDiario() {
      return this.form.get('valorDiario');
    }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Lunes 15 agosto' },
      { item_id: 2, item_text: 'Martes 16 agosto' },
      { item_id: 3, item_text: 'Miercoles 17 agosto' },
      { item_id: 4, item_text: 'Jueves 18 agosto' },
      { item_id: 5, item_text: 'Viernes 19 agosto' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Miercoles 17 agosto' },
      { item_id: 4, item_text: 'Jueves 18 agosto' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Seleccionar todos',
      unSelectAllText: 'Quitar todos',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      searchPlaceholderText: 'Buscar'
    };

    this.form = this.fb.group({
      nombreLocal: ['', [Validators.required]],
      valorDiario: ['', [Validators.required]],
      valorMensual: ['', [Validators.required]],
      idOperador: ['', [Validators.required]],
      planMensual: ['', [Validators.required]],
      formaTrabajo: ['', [Validators.required]],
      fechaTermino: [null, [Validators.required]],
      fechaInicio: [null, [Validators.required]],
      idLocal: ['', [Validators.required]],
    });

    this.obtenerOperadores();
    this.obtenerLocales();
  }

  ngOnDestroy(): void {
    this.$obtenerLocales.unsubscribe();
    this.$obtenerOperadores.unsubscribe();
  }

  obtenerOperadores() {
    this.$obtenerOperadores = this._utilService.obtenerOperadores().subscribe({
      next: (resp: any) => {
        this.operadores = resp.result;
      },
      error:(err) => {
        console.log(err);
      }
    });
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

  showModal(){
     if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    } 
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
    }).then((result) => {
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
    });
  }

}

  


