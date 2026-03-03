import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistorialPagosComponent } from './historial-pagos/historial-pagos.component';
import { RevisionPagosComponent } from './revision-pagos/revision-pagos.component';
import { HistoriasPagosComponent } from './historias-pagos/historias-pagos.component';
import { UltimosMovimientosComponent } from './ultimos-movimientos/ultimos-movimientos.component';
import { UltimosMovimientosOperadorComponent } from './ultimos-movimientos-operador/ultimos-movimientos-operador.component';

const childRoutes:Routes = [
    {path: '', 
        component: HistorialPagosComponent, 
        data:{titulo: 'Historial de Pagos'}
    },
    {
      path: 'revision-pagos',
      component: RevisionPagosComponent,
      data: { titulo: 'Revisión pagos' },
    },
    {
      path: 'historias-pagos',
      component: HistoriasPagosComponent,
      data: { titulo: 'Historias pagos' },
    },
    {
      path: 'historias-pagos/ultimos-movimientos',
      component: UltimosMovimientosComponent,
      data: { titulo: 'Últimos movimientos' },
    },
    {
      path: 'ultimos-movimientos',
      component: UltimosMovimientosOperadorComponent,
      data: { titulo: 'Últimos movimientos' },
    }
]

@NgModule({
  imports:[ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRouteHistorialModule { }