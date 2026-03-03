import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiciosComponent } from './servicios/servicios.component';
import { NuevoServicioComponent } from './nuevo-servicio/nuevo-servicio.component';

const childRoutes: Routes = [
  { path: '', component: ServiciosComponent, data: { titulo: 'Servicios' } },
  {
    path: 'nuevo-servicio',
    component: NuevoServicioComponent,
    data: { titulo: 'Nuevo Servicio' },
  },
  {
    path: 'editar-servicio/:id',
    component: NuevoServicioComponent,
    data: { titulo: 'Editar Servicio' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesServiciosModule {}
