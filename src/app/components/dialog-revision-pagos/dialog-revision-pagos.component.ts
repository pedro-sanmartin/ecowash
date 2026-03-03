import { Component,  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropDownList } from 'src/app/models/drop-down-list';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-dialog-revision-pagos',
  templateUrl: './dialog-revision-pagos.component.html',
  styleUrls: ['./dialog-revision-pagos.component.css']
})
export class DialogRevisionPagosComponent {

  constructor(
    private dialogRef: MatDialogRef<DialogRevisionPagosComponent>,
    private fb: FormBuilder,
    private _authService: AuthService,
    private _utilService: UtilsService
  ) { }

  form: FormGroup;

  listaLocales: DropDownList[] = [];
  listaMeses: DropDownList[] = [];
  listaAnnios: DropDownList[] = [];
  listaLocales$: any;
  listaMeses$: any;
  listaAnnios$: any;

  ngOnInit(): void {
    this.form = this.fb.group({
      idLocal: [''],
      meses: [''],
      annio: [''],
      idEstado: ['1'],
      tipoAbono: ['1'],
      limpiarFiltro:[false]
    });

    this.obtenerLocalesPorIdOperador(this._authService.ObtenerIdOperador());
    this.obtenerMes();
    this.obtenerAnniosPago();
  }

  ngOnDestroy(): void {
    this.listaLocales$.unsubscribe();
    this.listaMeses$.unsubscribe();
    this.listaAnnios$.unsubscribe();
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

  obtenerAnniosPago() {
    this.listaAnnios$ = this._utilService.obtenerAnniosFiltroPagos(this._authService.ObtenerIdOperador(), '0').subscribe({
      next: (resp: any) => {
        this.listaAnnios = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  filtrar(){  
    this.form.value.limpiarFiltro = false;
    this.dialogRef.close(this.form.value);
  }

  limpiarFiltros(){
    this.form.value.limpiarFiltro = true;
    this.dialogRef.close(this.form.value);
  }

}
