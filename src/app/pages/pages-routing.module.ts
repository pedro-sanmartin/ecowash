import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ChildRoutesReglasModule } from './child-routes-reglas.module';

const routes: Routes = [
  {
    path: 'inicio',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-routes-inicio.module').then((m) => m.ChildRoutesInicioModule),
  },
  {
    path: 'servicios',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-routes-servicio.module').then((m) => m.ChildRoutesServiciosModule),
  },
  {
    path: 'usuarios',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-routes-usuarios.module').then((m) => m.ChildRoutesUsuariosModule),
  },
  {
    path: 'locales',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-routes-locales.module').then((m) => m.ChildRoutesLocalesModule),
  },
  {
    path: 'reglas',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-routes-reglas.module').then((m) => m.ChildRoutesReglasModule),
  },
  {
    path: 'pagos',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-routes-pagos.module').then((m) => m.ChildRoutesPagosModule),
  },
  {
    path: 'pagar',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-routes-pagar.module').then((m) => m.ChildRoutesPagarModule),
  },
  {
    path: 'historial-pagos',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-routes-historial-pagos.module').then((m) => m.ChildRouteHistorialModule),
  },
  {
    path: 'error',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-routes-error.module').then((m) => m.ChildRouteErrorModule),
  },
  {
    path: 'enviar-notificacion',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-routes-enviar-notificacion.module').then((m) => m.ChildRouteEnviarNotificacionModule),
  },
  {
    path: 'reporte',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-routes-reportes.module').then((m) => m.ChildRouteReportesModule),
  },
  {
    path: 'descuentos',
    component: PagesComponent,
    loadChildren: () =>
      import('./child-routes-aprobacion-ajustes.module').then((m) => m.ChildRouteAprobacionAjustesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
