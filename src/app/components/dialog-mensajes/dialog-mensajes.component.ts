import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-mensajes',
  templateUrl: './dialog-mensajes.component.html',
  styleUrls: ['./dialog-mensajes.component.css']
})
export class DialogMensajesComponent{

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogMensajesComponent>,
  ) { }

  ngOnInit(): void {
  }

  detalleMensaje(){
    
  }

}
