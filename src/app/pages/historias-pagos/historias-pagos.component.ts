import { Component, Input, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownList } from 'src/app/models/drop-down-list';
import { UtilsService } from 'src/app/services/utils.service';
import { LocalesService } from '../../services/locales.service';
import { ValidatorsService } from 'src/app/services/validators.service';
import { AuthService } from 'src/app/services/auth.service';
import { Local } from 'src/app/models/local';

import Swal from 'sweetalert2';
import { Submenu } from '../../models/submenu';
import { CardGarantia } from 'src/app/models/cardGarantia';
import { Header } from '../../models/header';


@Component({
  selector: 'app-historias-pagos',
  templateUrl: './historias-pagos.component.html',
  styleUrls: ['./historias-pagos.component.css']
})
export class HistoriasPagosComponent implements OnInit {

  headerOptions:Header = {
    title: 'Historial de pagos',
    url: '',
    isBack: true,
    isNotificacion: false
  }
  submenu: Submenu[] = [
    {
      title: 'Revisión pagos',
      url: '/historial-pagos/revision-pagos',
      active: false
    },
    {
      title: 'Historias',
      url: '/historial-pagos/historias-pagos',
      active: false
    }
  ];
  cardGarantia: CardGarantia[] = [
    {
      title: 'Ultimos movimientos',
      url: '/historial-pagos/historias-pagos/ultimos-movimientos',
      active: false
    }
  ];
  id: string;
  form: FormGroup;
  dropdownList = [];
  selectedItems = [];
  ShowFilter = true;
  dropdownSettings: IDropdownSettings = {} as IDropdownSettings;
  listaMeses: DropDownList[] = [];
  listaMeses$: any;
  locales: Local[] = [];
  locales$: any;

  constructor(
    private fb: FormBuilder,
    private validators: ValidatorsService,
    private _authService: AuthService,
    private _utilService: UtilsService,
    private _localesService: LocalesService,
    private _localService: LocalesService
  ) { }

  get formControl() {
    return this.form.controls;
  }

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
    this.obtenerMes();
    this.getLocales();
  }

  ngOnDestroy(): void {
    this.listaMeses$.unsubscribe();
    this.locales$.unsubscribe();
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

  getLocales() {
    this.locales$ = this._localService.obtenerLocales().subscribe({
      next: (resp: any) => {
        this.locales = resp.result;
      },
      error: (err) => console.log(err.error.message),
    });
  }



}
