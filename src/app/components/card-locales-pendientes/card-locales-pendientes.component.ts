import { Component, Input, OnInit } from '@angular/core';
import { PagoPendiente } from 'src/app/models/pago';

@Component({
  selector: 'app-card-locales-pendientes',
  templateUrl: './card-locales-pendientes.component.html',
  styleUrls: ['./card-locales-pendientes.component.css']
})
export class CardLocalesPendientesComponent implements OnInit {

  @Input('pago') pago: PagoPendiente = {} as PagoPendiente;

  constructor() { }

  ngOnInit(): void {
  }

}
