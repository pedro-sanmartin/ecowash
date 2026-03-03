import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidarCambioContrasena, CambioContrasena } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';
import { ValidatorsService } from 'src/app/services/validators.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css'],
})
export class CambiarContrasenaComponent implements OnInit {
  form: FormGroup;
  service$ :any;
  token:string;
  validate:ValidarCambioContrasena = {} as ValidarCambioContrasena;
  cambioContrasena: CambioContrasena = {} as CambioContrasena;

  constructor(
    private _fb: FormBuilder,
    private _validators: ValidatorsService,
    private _router: Router,
    private _aRouter:ActivatedRoute,
    private _authService: AuthService
  ) {
    this.token = this._aRouter.snapshot.paramMap.get('token');
  }

  ngOnInit(): void {

    this.validarCambioContrasena();

    this.form = this._fb.group(
      {
        password: [null, [Validators.required]],
        repitePassword: [null, [Validators.required]],
      },
      {
        validators: this._validators.passwordsIguales(
          'password',
          'repitePassword'
        ),
      }
    );
  }

  get password() {
    return this.form.get('password');
  }

  get repitePasswordNoValido() {
    const pass1 = this.form.get('password').value;
    const pass2 = this.form.get('repitePassword').value;

    return pass1 === pass2 ? false : true;
  }

  iniciarCambiarContrasena(req:CambioContrasena){
    this.service$ = this._authService.CambioContrasena(req)
    .subscribe((resp:any) =>{

      if (resp.success) {
        Swal.fire({
          imageUrl: '../../../assets/images/icon-ok.svg',
          title: 'Cambiar contraseña',
          text: 'Su contraseña ha sido actualizada con éxito',
          showConfirmButton: true,
          confirmButtonText: 'Volver',
          padding: '1rem 0',
          width: '296',
          customClass: {
            popup: 'bs-modal',
            htmlContainer: 'bs-text',
            confirmButton: 'bs-button bs-button-primary',
            title: 'bs-title',
          },
        });

        this.service$.unsubscribe();
        this._router.navigateByUrl('/login');
      }
    });
  }

  validarCambioContrasena(){
    this.service$  = this._authService.ValidarCambioContrasena(this.token)
    .subscribe((resp:any) => {

      if (resp.success) this.validate = resp.result;
      else this._router.navigateByUrl('/login');

    }, (error) => {
        console.log(error);

        this._router.navigateByUrl('/login');
      }, () =>{
        this.service$.unsubscribe();
      });
  }

  cambiarContrasena() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.cambioContrasena.email = this.validate.email;
    this.cambioContrasena.idUsuario = this.validate.idUsuario;
    this.cambioContrasena.password = this.form.value.password;
    this.cambioContrasena.token = this.validate.codigo;

    this.iniciarCambiarContrasena(this.cambioContrasena);

  }
}
