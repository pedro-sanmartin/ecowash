import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReglasNegocioComponent } from './reglas-negocio/reglas-negocio.component';
import { PlanMensualComponent } from './plan-mensual/plan-mensual.component';
import { CierreMensualComponent } from './cierre-mensual/cierre-mensual.component';
import { AjustesReglasComponent } from './ajustes-reglas/ajustes-reglas.component';

const childRoutes:Routes = [
    {path: '', 
        component: ReglasNegocioComponent, 
        data:{titulo: 'Reglas'}
    },
    {
    path: 'plan-mensual',
    component: PlanMensualComponent,
    data: { titulo: 'Plan Mensual' },
    },
    {
      path: 'cierre-mensual',
      component: CierreMensualComponent,
      data: { titulo: 'Cierre Mensual' },
    },
    {
      path: 'ajustes-reglas',
      component: AjustesReglasComponent,
      data: { titulo: 'Ajustes Reglas' },
    },
]

@NgModule({
  imports:[ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesReglasModule { }