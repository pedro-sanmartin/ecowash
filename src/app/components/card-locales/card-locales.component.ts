import { Component, OnInit, Input } from '@angular/core';
import { Local } from 'src/app/models/local';

@Component({
  selector: 'app-card-locales',
  templateUrl: './card-locales.component.html',
  styleUrls: ['./card-locales.component.css']
})
export class CardLocalesComponent implements OnInit {

  @Input('local') local: Local;

  constructor() { }

  ngOnInit(): void {
  }

}
