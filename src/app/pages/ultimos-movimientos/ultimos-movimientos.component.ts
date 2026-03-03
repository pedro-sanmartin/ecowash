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
  selector: 'app-ultimos-movimientos',
  templateUrl: './ultimos-movimientos.component.html',
  styleUrls: ['./ultimos-movimientos.component.css']
})
export class UltimosMovimientosComponent implements OnInit {

  headerOptions:Header = {
    title: 'Historial de pagos',
    url: '/historial-pagos/historias-pagos',
    isBack: true,
    isNotificacion: false
  };
  id: string;
  form: FormGroup;
  dropdownList = [];
  selectedItems = [];
  ShowFilter = true;
  dropdownSettings: IDropdownSettings = {} as IDropdownSettings;
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

  get meses() {
    return this.form.get('meses');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      idLocal: ['', [Validators.required]],
      meses: ['', [Validators.required]]
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

}
