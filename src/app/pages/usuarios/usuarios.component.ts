import { Component, OnInit } from '@angular/core';
import { Usuario, UsuariosFiltro } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogUsuariosComponent } from 'src/app/components/dialog-usuarios/dialog-usuarios.component';
import { Header } from '../../models/header';
import { UtilsService } from 'src/app/services/utils.service';
import { DropDownList } from 'src/app/models/drop-down-list';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  roles: DropDownList[] = [];
  filtro: UsuariosFiltro = {} as UsuariosFiltro;

  headerOptions: Header = {
    title: 'Registro usuarios',
    url: '/inicio',
    isBack: true,
    isNotificacion: false,
  };
  textButton: string = 'Crear nuevo usuario';
  urlButton: string = '/usuarios/nuevo-usuario';
  typeCard: string = 'usuarios';

  message: string = 'No se encuentran usuarios';

  dialogUsuariosComponent: MatDialogRef<DialogUsuariosComponent>;

  obsUsuarios$: any;
  obsRoles$: any;

  usuario: Usuario = {} as Usuario;

  constructor(
    private _usuarioService: UsuarioService,
    private dialog: MatDialog,
    private _utilService: UtilsService
  ) {}

  ngOnInit(): void {
    this.servicioObtenerUsuarios(null, false);
    this.servicioObtenerRoles();
  }

  ngOnDestroy(): void {
    if (this.obsUsuarios$) this.obsUsuarios$.unsubscribe();
    if (this.obsRoles$) this.obsRoles$.unsubscribe();
  }

  servicioObtenerUsuarios(filtro: UsuariosFiltro, isFiltro: boolean) {
    this.obsUsuarios$ = this._usuarioService.obtenerUsuarios().subscribe({
      next: (resp: any) => {
        this.usuarios = [];
        if (isFiltro)
          this.usuarios = resp.result.filter(
            (u) =>
              (u.idRol == filtro.idRol || filtro.idRol == 0) &&
              u.idEstadoUsuario == filtro.idEstado
          );
        else this.usuarios = resp.result;
      },
      error: (err) => console.log(err),
    });
  }

  servicioObtenerRoles() {
    this.obsRoles$ = this._utilService.obtenerRoles().subscribe({
      next: (resp: any) => {
        this.roles = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  limpiarFiltros() {
    this.servicioObtenerUsuarios(null, false);
  }

  openDialog() {
    this.dialogUsuariosComponent = this.dialog.open(DialogUsuariosComponent, {
      data: this.roles,
      position: {
        top: '150px',
      },
      panelClass: 'my-dialog',
    });

    this.dialogUsuariosComponent.afterClosed().subscribe({
      next: (resp: any) => {
        if (resp) {
          this.filtro.idRol = parseInt(resp.idRol) || 0;
          this.filtro.idEstado = parseInt(resp.idEstado);
          this.servicioObtenerUsuarios(this.filtro, true);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
