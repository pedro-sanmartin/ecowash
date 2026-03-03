import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownList } from 'src/app/models/drop-down-list';
import { UtilsService } from 'src/app/services/utils.service';
import { LocalesService } from '../../services/locales.service';
import { ValidatorsService } from 'src/app/services/validators.service';
import { Submenu } from 'src/app/models/submenu';

import { AuthService } from 'src/app/services/auth.service';
import { Observable, ReplaySubject } from 'rxjs';

import Swal from 'sweetalert2';
import { Header } from '../../models/header';

@Component({
  selector: 'app-informe-consolidado',
  templateUrl: './informe-consolidado.component.html',
  styleUrls: ['./informe-consolidado.component.css']
})
export class InformeConsolidadoComponent implements OnInit {

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

  listaMeses: DropDownList[] = [];
  listaMeses$: any;
  dropdownList = [];
  selectedItems = [];
  ShowFilter = true;
  dropdownSettings: IDropdownSettings = {} as IDropdownSettings;

  constructor(
    private fb: FormBuilder,
    private validators: ValidatorsService,
    private _utilService: UtilsService,
    private _localesService: LocalesService,
    private _authService: AuthService
  ) { }



  ngOnInit(): void {
    this.form = this.fb.group({
      meses: ['', [Validators.required]],
    });

    this.obtenerMes();
  }

  get formControl() {
    return this.form.controls;
  }

  ngOnDestroy(): void {
    this.listaMeses$.unsubscribe();
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

}
