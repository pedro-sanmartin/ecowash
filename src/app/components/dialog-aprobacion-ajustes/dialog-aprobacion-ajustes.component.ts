import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownList } from 'src/app/models/drop-down-list';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ValidatorsService } from '../../services/validators.service';

/* export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
} */

@Component({
  selector: 'app-dialog-aprobacion-ajustes',
  templateUrl: './dialog-aprobacion-ajustes.component.html',
  styleUrls: ['./dialog-aprobacion-ajustes.component.css']
})
export class DialogAprobacionAjustesComponent{

  constructor(
    /* @Inject(MAT_DIALOG_DATA) public data: DialogData, */
    private fb: FormBuilder,
    private _authService: AuthService,
    private _utilService: UtilsService,
    private validators: ValidatorsService
  ) { }

  form: FormGroup;
  listaLocales: DropDownList[] = [];
  listaMeses: DropDownList[] = [];
  dropdownSettings: IDropdownSettings = {} as IDropdownSettings;
  listaLocales$: any;
  listaMeses$: any;

  get formControl() {
    return this.form.controls;
  }

  get idLocal() {
    return this.form.get('idLocal');
  }

  get meses() {
    return this.form.get('meses');
  }

  get año() {
    return this.form.get('año');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      idLocal: ['', [Validators.required]],
      meses: ['', [Validators.required]],
      año: ['', [Validators.required]],
    });

    this.obtenerLocalesPorIdOperador(this._authService.ObtenerIdOperador());
    this.obtenerMes();
  }

  ngOnDestroy(): void {
    this.listaLocales$.unsubscribe();
    this.listaMeses$.unsubscribe();
  }

  obtenerLocalesPorIdOperador(id: string) {
    this.listaLocales$ = this._utilService
      .obtenerLocalesPorIdOperador(id)
      .subscribe({
        next: (resp: any) => {
          this.listaLocales = resp.result;
        },
        error: (err) => {
          console.log(err);
        },
      });
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

  filtrar(){
    
  }

}
