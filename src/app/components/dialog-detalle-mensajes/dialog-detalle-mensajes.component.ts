import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-detalle-mensajes',
  templateUrl: './dialog-detalle-mensajes.component.html',
  styleUrls: ['./dialog-detalle-mensajes.component.css']
})
export class DialogDetalleMensajesComponent{

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogDetalleMensajesComponent>,
  ) { }

  ngOnInit(): void {
  }

  volver(){
    this.dialogRef.close();
  }

}
