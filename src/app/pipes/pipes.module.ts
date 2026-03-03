import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomCurrencyPipe } from './custom-currency.pipe';
import { StatusPipe } from './status.pipe';



@NgModule({
  declarations: [
    CustomCurrencyPipe,
    StatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomCurrencyPipe,
    StatusPipe
  ]
})
export class PipesModule { }
