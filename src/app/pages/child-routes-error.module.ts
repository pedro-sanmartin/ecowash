import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';

const childRoutes:Routes = [
    {path: '', 
        component: ErrorComponent, 
        data:{titulo: 'Error'}
    },
]

@NgModule({
  imports:[ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRouteErrorModule { }