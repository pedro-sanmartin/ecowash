import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { AuthService } from 'src/app/services/auth.service';
import { Header } from 'src/app/models/header';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogMensajesComponent } from '../dialog-mensajes/dialog-mensajes.component';
/* import { DialogDetalleMensajesComponent } from '../dialog-detalle-mensajes/dialog-detalle-mensajes.component'; */



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  @Input('options') options: Header = {} as Header;

  dialogMensajesComponent: MatDialogRef<DialogMensajesComponent>;
/*   dialogDetalleMensajesComponent: MatDialogRef<DialogDetalleMensajesComponent>; */

  constructor(
    private _menuService: MenuService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
  }

  showMenu() {
    this._menuService.show();
  }

  openDialog() {
    this.dialogMensajesComponent = this.dialog.open(DialogMensajesComponent);
  }

/*   openDialog() {
    this.dialogDetalleMensajesComponent = this.dialog.open(DialogDetalleMensajesComponent);
  } */

}
