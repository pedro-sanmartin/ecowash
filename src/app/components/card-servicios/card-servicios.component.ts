import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-card-servicios',
  templateUrl: './card-servicios.component.html',
  styleUrls: ['./card-servicios.component.css'],
})
export class CardServiciosComponent implements OnInit {
  @Input('servicio') servicio: Servicio;

  constructor() {}

  ngOnInit(): void {}
}
