import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CardGarantia } from 'src/app/models/cardGarantia';

@Component({
  selector: 'app-card-garantia',
  templateUrl: './card-garantia.component.html',
  styleUrls: ['./card-garantia.component.css']
})
export class CardGarantiaComponent implements OnInit {

  @Input('cardGarantia') cardGarantia:CardGarantia[] = [];

  constructor(private router:Router, private _location: Location) { }

  ngOnInit(): void {
    this.validarActiva();
  }

  validarActiva(){
    this.cardGarantia = this.cardGarantia.map(item=>{
      if(item.url===this.router.url){
        item.active=true;
      }
      return item;
    })
  }

}
