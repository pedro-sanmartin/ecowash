import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DropDownList } from 'src/app/models/drop-down-list';

@Component({
  selector: 'app-dialog-usuarios',
  templateUrl: './dialog-usuarios.component.html',
  styleUrls: ['./dialog-usuarios.component.css'],
})
export class DialogUsuariosComponent {
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DropDownList[]
  ) {}

  form: FormGroup;
  rol$: any;

  ngOnInit(): void {
    this.form = this.fb.group({
      idRol: [''],
      idEstado: ['1'],
    });
  }

  ngOnDestroy(): void {
    if (this.rol$) {
      this.rol$.unsubscribe();
    }
  }

  filtrar() {
    this.dialogRef.close(this.form.value);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
