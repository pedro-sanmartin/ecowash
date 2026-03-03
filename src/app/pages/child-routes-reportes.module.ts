import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportesComponent } from './reportes/reportes.component';
import { InformeConsolidadoComponent } from './informe-consolidado/informe-consolidado.component';
import { InformeDetalladoComponent } from './informe-detallado/informe-detallado.component';


const childRoutes:Routes = [
    {path: '', 
        component: ReportesComponent, 
        data:{titulo: 'Reportes'}
    },
    {
      path: 'informe-consolidado',
      component: InformeConsolidadoComponent,
      data: { titulo: 'Informe consolidado' },
    },
    {
      path: 'informe-detallado',
      component: InformeDetalladoComponent,
      data: { titulo: 'Informe detallado' },
    },
]

@NgModule({
  imports:[ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRouteReportesModule { }