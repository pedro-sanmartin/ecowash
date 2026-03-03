import { Component, OnInit } from '@angular/core';
import { Header } from '../../models/header';
import { CardGarantia } from 'src/app/models/cardGarantia';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  headerOptions: Header = {
    title: 'Pagos',
    url: '',
    isBack: true,
    isNotificacion: false
  };

  cardGarantia: CardGarantia[] = [
    { title: 'Revisión de pagos', url: '/pagos/revision-pagos', active: false },
    { title: 'Historias de pagos', url: '/pagos/historias-pagos', active: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
