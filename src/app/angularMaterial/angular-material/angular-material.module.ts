import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [CommonModule, CdkAccordionModule, MatDialogModule],
  exports: [CdkAccordionModule, MatDialogModule],
})
export class AngularMaterialModule {}
