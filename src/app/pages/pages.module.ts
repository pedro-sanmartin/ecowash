import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ComponentsModule } from '../components/components.module';

import { ServiciosComponent } from './servicios/servicios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LocalesComponent } from './locales/locales.component';
import { NuevoServicioComponent } from './nuevo-servicio/nuevo-servicio.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { NuevoLocalComponent } from './nuevo-local/nuevo-local.component';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReglasNegocioComponent } from './reglas-negocio/reglas-negocio.component';
import { PlanMensualComponent } from './plan-mensual/plan-mensual.component';
import { CierreMensualComponent } from './cierre-mensual/cierre-mensual.component';
import { AjustesReglasComponent } from './ajustes-reglas/ajustes-reglas.component';
import { PagosComponent } from './pagos/pagos.component';
import { PagarComponent } from './pagar/pagar.component';
import { HistorialPagosComponent } from './historial-pagos/historial-pagos.component';
import { RealizarPagoComponent } from './realizar-pago/realizar-pago.component';
import { PagosPendientesComponent } from './pagos-pendientes/pagos-pendientes.component';
import { RevisionPagosComponent } from './revision-pagos/revision-pagos.component';
import { HistoriasPagosComponent } from './historias-pagos/historias-pagos.component';
import { UltimosMovimientosComponent } from './ultimos-movimientos/ultimos-movimientos.component';
import { UltimosMovimientosOperadorComponent } from './ultimos-movimientos-operador/ultimos-movimientos-operador.component';
import { EnviarNotificacionComponent } from './enviar-notificacion/enviar-notificacion.component';
import { ReportesComponent } from './reportes/reportes.component';
import { InformeConsolidadoComponent } from './informe-consolidado/informe-consolidado.component';
import { InformeDetalladoComponent } from './informe-detallado/informe-detallado.component';
import { AprobacionAjustesComponent } from './aprobacion-ajustes/aprobacion-ajustes.component';

@NgModule({
  declarations: [
    ServiciosComponent,
    UsuariosComponent,
    LocalesComponent,
    NuevoServicioComponent,
    NuevoUsuarioComponent,
    NuevoLocalComponent,
    InicioComponent,
    PagesComponent,
    ReglasNegocioComponent,
    PlanMensualComponent,
    CierreMensualComponent,
    AjustesReglasComponent,
    PagosComponent,
    PagarComponent,
    HistorialPagosComponent,
    RealizarPagoComponent,
    PagosPendientesComponent,
    RevisionPagosComponent,
    HistoriasPagosComponent,
    UltimosMovimientosComponent,
    UltimosMovimientosOperadorComponent,
    EnviarNotificacionComponent,
    ReportesComponent,
    InformeConsolidadoComponent,
    InformeDetalladoComponent,
    AprobacionAjustesComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
  ],
  exports: [
    ServiciosComponent,
    UsuariosComponent,
    LocalesComponent,
    NuevoServicioComponent,
    NuevoUsuarioComponent,
    NuevoLocalComponent,
  ],
})
export class PagesModule {}
