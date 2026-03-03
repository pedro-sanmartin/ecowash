import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropDownList } from 'src/app/models/drop-down-list';
import { UtilsService } from 'src/app/services/utils.service';

export interface Data {
  locales: DropDownList[];
  regiones: DropDownList[];
}

@Component({
  selector: 'app-dialog-locales',
  templateUrl: './dialog-locales.component.html',
  styleUrls: ['./dialog-locales.component.css'],
})
export class DialogLocalesComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Data,
    private fb: FormBuilder,
    private _utilService: UtilsService,
    private dialogRef: MatDialogRef<DialogLocalesComponent>
  ) {}

  form: FormGroup;

  obsComunas$: any;

  comunas: DropDownList[] = [];

  ngOnInit(): void {
    this.form = this.fb.group({
      idLocal: [''],
      region: [''],
      comuna: [''],
    });
  }
  obtenerComunasPorRegion(event) {
    const id = event.target.value;
    if (id === '' || id === undefined) {
      this.comunas = [];
      this.form.controls['comuna'].setValue('');
      return;
    }

    this.servicioObtenerComunasPorRegion(id);
  }

  servicioObtenerComunasPorRegion(id) {
    this.obsComunas$ = this._utilService.obtenerComunasPorRegion(id).subscribe({
      next: (resp: any) => {
        this.comunas = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.obsComunas$) this.obsComunas$.unsubscribe();
  }

  filtrar() {
    this.dialogRef.close(this.form.value);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
