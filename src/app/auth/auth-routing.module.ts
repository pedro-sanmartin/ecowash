import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data:{title:'Login'} },
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent, data:{title:'Recuperar Contraseña'} },
  { path: 'cambiar-contrasena/:token', component: CambiarContrasenaComponent, data:{title:'Cambiar Contraseña'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }