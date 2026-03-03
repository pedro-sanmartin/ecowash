import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnviarNotificacionComponent } from './enviar-notificacion/enviar-notificacion.component';

const childRoutes:Routes = [
    {path: '', 
        component: EnviarNotificacionComponent, 
        data:{titulo: 'Enviar Notificación'}
    },
]

@NgModule({
  imports:[ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRouteEnviarNotificacionModule { }