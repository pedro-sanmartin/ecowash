import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogRevisionPagosComponent } from '../../components/dialog-revision-pagos/dialog-revision-pagos.component';
import { Submenu } from '../../models/submenu';
import { Header } from '../../models/header';

@Component({
  selector: 'app-revision-pagos',
  templateUrl: './revision-pagos.component.html',
  styleUrls: ['./revision-pagos.component.css']
})
export class RevisionPagosComponent implements OnInit {

  headerOptions:Header = {
    title: 'Historial de pagos',
    url: '',
    isBack: true,
    isNotificacion: false
  };
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

  dialogRevisionPagosComponent: MatDialogRef<DialogRevisionPagosComponent>;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {}

  openDialog() {

    this.dialogRevisionPagosComponent = this.dialog.open(DialogRevisionPagosComponent);

    this.dialogRevisionPagosComponent.afterClosed().subscribe({
      next: (resp:any) => {
        console.log(resp);
      },
      error: err => {
        console.log(err);
      }
    });  
  }

}
