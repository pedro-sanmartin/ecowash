import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownList } from '../../models/drop-down-list';
import { Header } from '../../models/header';


@Component({
  selector: 'app-reglas-negocio',
  templateUrl: './reglas-negocio.component.html',
  styleUrls: ['./reglas-negocio.component.css']
})
export class ReglasNegocioComponent implements OnInit {

  headerOptions:Header = {
    title: 'Reglas de negocio',
    url: '/inicio',
    isBack: true,
    isNotificacion: false
  }
  id: string;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tipoRegla: ['', [Validators.required]],
    });
  }

  cambiarUrl(event:any){
    console.log(event);
    const id = event.target.value;
    if (id === '' || id === undefined) {
      return;
    }else if (id === '1'){
      this.router.navigateByUrl("reglas/plan-mensual")
      return;
    }else if (id === '2'){
      this.router.navigateByUrl("reglas/cierre-mensual")
      return;
    }else if (id === '3'){
      this.router.navigateByUrl("reglas/ajustes-reglas")
      return;
    }
  }

  get formControl() {
    return this.form.controls;
  }

}
