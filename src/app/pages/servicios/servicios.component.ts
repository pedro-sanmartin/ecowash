import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { Submenu } from 'src/app/models/submenu';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Header } from '../../models/header';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  headerOptions: Header = {
    title: 'Servicios',
    url: '/inicio',
    isBack: true,
    isNotificacion: false,
  };
  servicios: Servicio[] = [];
  textButton: string = 'Agregar servicio';
  urlButton: string = '/servicios/nuevo-servicio';
  typeCard: string = 'servicios';

  message: string = 'No se encuentran servicios';

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

  susServicios: any;

  constructor(private _servicioService: ServiciosService) {}

  ngOnInit(): void {
    this.getServicios();
  }

  ngOnDestroy(): void {
    this.susServicios.unsubscribe();
  }

  getServicios() {
    this.susServicios = this._servicioService
      .obtenerServicios()
      .subscribe((resp: any) => {
        this.servicios = resp.result;
      });
  }
}
