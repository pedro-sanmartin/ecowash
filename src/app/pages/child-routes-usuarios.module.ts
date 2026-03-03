import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

const childRoutes: Routes = [
  { path: '', 
    component: UsuariosComponent, 
    data: { titulo: 'Usuarios' } 
  },
  {
    path: 'nuevo-usuario',
    component: NuevoUsuarioComponent,
    data: { titulo: 'Nuevo usuario' },
  },
  {
    path: 'editar-usuario/:id',
    component: NuevoUsuarioComponent,
    data: { titulo: 'Editar usuario' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesUsuariosModule {}
