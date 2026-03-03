import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardServiciosComponent } from './card-servicios/card-servicios.component';
import { CardUsuariosComponent } from './card-usuarios/card-usuarios.component';
import { MenuComponent } from './menu/menu.component';
import { CardLocalesComponent } from './card-locales/card-locales.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { CardLocalesPendientesComponent } from './card-locales-pendientes/card-locales-pendientes.component';
import { PantallaErrorComponent } from './pantalla-error/pantalla-error.component';
import { CardGarantiaComponent } from './card-garantia/card-garantia.component';
import { CardAbonosComponent } from './card-abonos/card-abonos.component';
import { CardMensajesComponent } from './card-mensajes/card-mensajes.component';
import { CardAprobacionAjustesComponent } from './card-aprobacion-ajustes/card-aprobacion-ajustes.component';
import { SinDatosComponent } from './sin-datos/sin-datos.component';

import { CardRevisionPagosComponent } from './card-revision-pagos/card-revision-pagos.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogUsuariosComponent } from './dialog-usuarios/dialog-usuarios.component';
import { DialogLocalesComponent } from './dialog-locales/dialog-locales.component';
import { DialogRevisionPagosComponent } from './dialog-revision-pagos/dialog-revision-pagos.component';
import { DialogInformeDetalladoComponent } from './dialog-informe-detallado/dialog-informe-detallado.component';
import { DialogAprobacionAjustesComponent } from './dialog-aprobacion-ajustes/dialog-aprobacion-ajustes.component';
import { DialogMensajesComponent } from './dialog-mensajes/dialog-mensajes.component';
import { DialogDetalleMensajesComponent } from './dialog-detalle-mensajes/dialog-detalle-mensajes.component';

import { AngularMaterialModule } from '../angularMaterial/angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardServiciosComponent,
    CardUsuariosComponent,
    CardLocalesComponent,
    MenuComponent,
    SubmenuComponent,
    CardLocalesPendientesComponent,
    PantallaErrorComponent,
    CardGarantiaComponent,
    CardAbonosComponent,
    CardMensajesComponent,
    CardAprobacionAjustesComponent,
    CardRevisionPagosComponent,
    DialogComponent,
    DialogUsuariosComponent,
    DialogLocalesComponent,
    DialogRevisionPagosComponent,
    DialogInformeDetalladoComponent,
    DialogAprobacionAjustesComponent,
    SinDatosComponent,
    DialogMensajesComponent,
    DialogDetalleMensajesComponent
  ],
  imports: [CommonModule, RouterModule, IconsModule, ReactiveFormsModule, AngularMaterialModule, PipesModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardServiciosComponent,
    CardUsuariosComponent,
    CardLocalesComponent,
    MenuComponent,
    SubmenuComponent,
    CardLocalesPendientesComponent,
    PantallaErrorComponent,
    CardGarantiaComponent,
    CardAbonosComponent,
    CardMensajesComponent,
    CardAprobacionAjustesComponent,
    CardRevisionPagosComponent,
    DialogComponent,
    DialogUsuariosComponent,
    DialogLocalesComponent,
    DialogRevisionPagosComponent,
    DialogInformeDetalladoComponent,
    DialogAprobacionAjustesComponent,
    SinDatosComponent,
    DialogMensajesComponent,
    DialogDetalleMensajesComponent
  ],
})
export class ComponentsModule {}
