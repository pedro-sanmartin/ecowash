import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownList } from 'src/app/models/drop-down-list';
import { UtilsService } from 'src/app/services/utils.service';
import { LocalesService } from '../../services/locales.service';
import { ValidatorsService } from 'src/app/services/validators.service';
import { MatDialog } from '@angular/material/dialog';


import Swal from 'sweetalert2';
import { DialogAprobacionAjustesComponent } from '../../components/dialog-aprobacion-ajustes/dialog-aprobacion-ajustes.component';
import { Header } from '../../models/header';

@Component({
  selector: 'app-aprobacion-ajustes',
  templateUrl: './aprobacion-ajustes.component.html',
  styleUrls: ['./aprobacion-ajustes.component.css']
})
export class AprobacionAjustesComponent implements OnInit {

  headerOptions:Header = {
    title: 'Aprobación de ajustes',
    url: '',
    isBack: true,
    isNotificacion: false
  }
  id: string;
  form: FormGroup;
  dropdownList = [];

  constructor(
    private fb: FormBuilder,
    private validators: ValidatorsService,
    private _utilService: UtilsService,
    private _localesService: LocalesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      
    });
  }

  get formControl() {
    return this.form.controls;
  }

  openDialog() {
    this.dialog.open(DialogAprobacionAjustesComponent, {
      minWidth: '300px',
/*       data: {
        animal: 'unicorn',
      }, */
    });
  }

}
