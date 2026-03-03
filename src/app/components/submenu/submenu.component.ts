import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Submenu } from '../../models/submenu';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {
  
  @Input('submenu') submenu:Submenu[] = [];

  constructor(private router:Router, private _location: Location) { }

  ngOnInit(): void {
    this.validarActiva();
  }

  validarActiva(){
    this.submenu = this.submenu.map(item=>{
      if(item.url===this.router.url){
        item.active=true;
      }
      return item;
    })
  }

}
