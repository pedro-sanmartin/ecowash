import { Component, OnInit } from '@angular/core';
import { Header } from '../../models/header';
import { CardGarantia } from 'src/app/models/cardGarantia';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  headerOptions: Header = {
    title: 'Reportes',
    url: '',
    isBack: true,
    isNotificacion: false
  };

  cardGarantia: CardGarantia[] = [
    { title: 'Informe consolidado', url: '/reporte/informe-consolidado', active: false },
    { title: 'Informe detallado', url: '/reporte/informe-detallado', active: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
