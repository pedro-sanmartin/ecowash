import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownList } from 'src/app/models/drop-down-list';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog-informe-detallado',
  templateUrl: './dialog-informe-detallado.component.html',
  styleUrls: ['./dialog-informe-detallado.component.css']
})
export class DialogInformeDetalladoComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private _authService: AuthService,
    private _utilService: UtilsService,
  ) { }

  form: FormGroup;
  listaLocales: DropDownList[] = [];
  listaMeses: DropDownList[] = [];
  listaLocales$: any;
  listaMeses$: any;
  jefesDeVenta: DropDownList[] = [];

  get formControl() {
    return this.form.controls;
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      idLocal: ['', [Validators.required]],
      meses: ['', [Validators.required]],
      año: ['', [Validators.required]],
      idJefeVentas: ['', [Validators.required]],
    });

    this.obtenerLocalesPorIdOperador(this._authService.ObtenerIdOperador());
    this.obtenerMes();
    this.obtenerJefesDeVenta();
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

  obtenerJefesDeVenta() {
    this._utilService.obtenerJefesDeVenta().subscribe({
      next: (resp: any) => {
        this.jefesDeVenta = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  filtrar(){
    
  }

}
