import { Component, OnInit } from '@angular/core';
import { Header } from '../../models/header';
import { CardGarantia } from 'src/app/models/cardGarantia';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {

  headerOptions: Header = {
    title: 'Pagar',
    url: '',
    isBack: true,
    isNotificacion: false
  };

  cardGarantia: CardGarantia[] = [
    { title: 'Realizar pago', url: '/pagar/realizar-pago', active: false },
    { title: 'Pagos pendientes', url: '/pagar/pagos-pendientes', active: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
