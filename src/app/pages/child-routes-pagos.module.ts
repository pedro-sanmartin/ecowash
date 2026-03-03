import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagosComponent } from './pagos/pagos.component';
import { RevisionPagosComponent } from './revision-pagos/revision-pagos.component';
import { HistorialPagosComponent } from './historial-pagos/historial-pagos.component';
import { UltimosMovimientosComponent } from './ultimos-movimientos/ultimos-movimientos.component';

const childRoutes:Routes = [
    {path: '', 
        component: PagosComponent, 
        data:{titulo: 'Pagos'}
    },
    {
      path: 'revision-pagos',
      component: RevisionPagosComponent,
      data: { titulo: 'Revisión pagos' },
    },
    {
      path: 'historias-pagos',
      component: HistorialPagosComponent,
      data: { titulo: 'Historias pagos' },
    },
    {
      path: 'historias-pagos/ultimos-movimientos',
      component: UltimosMovimientosComponent,
      data: { titulo: 'Últimos movimientos' },
    }
]

@NgModule({
  imports:[ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesPagosModule { }