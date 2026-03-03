import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocalesComponent } from './locales/locales.component';
import { NuevoLocalComponent } from './nuevo-local/nuevo-local.component';

const childRoutes: Routes = [
  { path: '', component: LocalesComponent, data: { titulo: 'Locales' } },
  {
    path: 'nuevo-local',
    component: NuevoLocalComponent,
    data: { titulo: 'Nuevo local' },
  },
  {
    path: 'editar-local/:id',
    component: NuevoLocalComponent,
    data: { titulo: 'Editar local' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesLocalesModule {}
