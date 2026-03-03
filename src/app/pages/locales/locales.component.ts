import { Component, OnInit } from '@angular/core';
import { Local, LocalFiltro } from 'src/app/models/local';
import { Submenu } from 'src/app/models/submenu';
import { LocalesService } from 'src/app/services/locales.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogLocalesComponent } from 'src/app/components/dialog-locales/dialog-locales.component';
import { Header } from '../../models/header';
import { DropDownList } from 'src/app/models/drop-down-list';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css'],
})
export class LocalesComponent implements OnInit {
  headerOptions: Header = {
    title: 'Locales',
    url: '/inicio',
    isBack: true,
    isNotificacion: false,
  };
  locales: Local[] = [];
  localesFiltro: Local[] = [];
  locales$: any;

  filtro: LocalFiltro = {} as LocalFiltro;

  message: string = 'No se encuentran locales';

  regiones: DropDownList[] = [];
  provincias: DropDownList[] = [];
  comunas: DropDownList[] = [];
  textButton: string = 'Agregar local';
  urlButton: string = '/locales/nuevo-local';

  submenu: Submenu[] = [
    {
      title: 'Servicios',
      url: '/servicios',
      active: false,
    },
    {
      title: 'Locales',
      url: '/locales',
      active: false,
    },
  ];

  dialogLocalesComponent: MatDialogRef<DialogLocalesComponent>;

  constructor(
    private _localService: LocalesService,
    private dialog: MatDialog,
    private _utilService: UtilsService
  ) {}

  ngOnInit(): void {
    this.servicioObtenerLocales(null, false);
    this.obtenerRegiones();
  }

  ngOnDestroy(): void {
    this.locales$.unsubscribe();
  }

  servicioObtenerLocales(filtro: LocalFiltro, isFiltro: boolean) {
    this.locales$ = this._localService.obtenerLocales().subscribe({
      next: (resp: any) => {
        this.localesFiltro = [];
        if (isFiltro) {
          this.localesFiltro = resp.result.filter(
            (l) =>
              l.id == filtro.idLocal ||
              (filtro.idLocal == 0 &&
                (l.idComuna == filtro.idComuna || filtro.idComuna == 0) &&
                (l.idRegion == filtro.idRegion || filtro.idRegion == 0))
          );
        } else {
          this.localesFiltro = resp.result;
          this.locales = resp.result;
        }
      },
      error: (err) => console.log(err),
    });
  }

  obtenerRegiones() {
    this._utilService.obtenerRegiones().subscribe({
      next: (resp: any) => {
        this.regiones = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  obtenerComunasPorRegion(id: string) {
    this._utilService.obtenerComunasPorRegion(id).subscribe({
      next: (resp: any) => {
        this.comunas = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  openDialog() {
    this.dialogLocalesComponent = this.dialog.open(DialogLocalesComponent, {
      data: {
        locales: this.locales,
        regiones: this.regiones,
      },
      position: {
        top: '200px',
      },
      panelClass: 'my-dialog',
    });

    this.dialogLocalesComponent.afterClosed().subscribe({
      next: (resp: any) => {
        if (resp) {
          this.filtro.idComuna = parseInt(resp.comuna) || 0;
          this.filtro.idLocal = parseInt(resp.idLocal) || 0;
          this.filtro.idRegion = parseInt(resp.region) || 0;
          this.servicioObtenerLocales(this.filtro, true);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  limpiarFiltros() {
    this.servicioObtenerLocales(null, false);
  }
}
