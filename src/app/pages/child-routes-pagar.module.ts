import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagarComponent } from './pagar/pagar.component';
import { RealizarPagoComponent } from './realizar-pago/realizar-pago.component';
import { PagosPendientesComponent } from './pagos-pendientes/pagos-pendientes.component';

const childRoutes:Routes = [
    {path: '', 
        component: PagarComponent, 
        data:{titulo: 'Pagar'}
    },
    {
      path: 'realizar-pago',
      component: RealizarPagoComponent,
      data: { titulo: 'Realizar Pago' },
    },
    {
      path: 'pagos-pendientes',
      component: PagosPendientesComponent,
      data: { titulo: 'Pagos Pendientes' },
    },
]

@NgModule({
  imports:[ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesPagarModule { }