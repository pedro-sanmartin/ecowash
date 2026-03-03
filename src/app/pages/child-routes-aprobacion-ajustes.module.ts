import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AprobacionAjustesComponent } from './aprobacion-ajustes/aprobacion-ajustes.component';

const childRoutes:Routes = [
    {path: '', 
        component: AprobacionAjustesComponent, 
        data:{titulo: 'Error'}
    },
]

@NgModule({
  imports:[ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRouteAprobacionAjustesModule { }