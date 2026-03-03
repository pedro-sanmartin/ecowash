import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sin-datos',
  templateUrl: './sin-datos.component.html',
  styleUrls: ['./sin-datos.component.css']
})
export class SinDatosComponent implements OnInit {

  @Input('message') message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
