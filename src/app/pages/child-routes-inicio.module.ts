import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';

const childRoutes:Routes = [
  {path: '', component: InicioComponent, data:{titulo: 'Inicio'}},
]

@NgModule({
  imports:[ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesInicioModule { }