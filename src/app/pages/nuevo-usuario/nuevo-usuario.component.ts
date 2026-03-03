import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { ValidatorsService } from 'src/app/services/validators.service';
import { DropDownList } from 'src/app/models/drop-down-list';

import Swal from 'sweetalert2';
import { UtilsService } from 'src/app/services/utils.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Header } from '../../models/header';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  headerOptions: Header = {
    title: '',
    url: '/usuarios',
    isBack: true,
    isNotificacion: false,
  };
  id: string;
  form: FormGroup;
  isEditar: boolean = false;
  roles: DropDownList[] = [];
  usuario: Usuario = {} as Usuario;

  question: string = '';
  resultModal: string = '';
  btnName: string = '';

  rol$: any;

  constructor(
    private fb: FormBuilder,
    private validators: ValidatorsService,
    private router: Router,
    private aRouter: ActivatedRoute,
    private _utilService: UtilsService,
    private _usuarioService: UsuarioService
  ) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  get formControl() {
    return this.form.controls;
  }

  get repitePasswordNoValido() {
    const pass1 = this.form.get('password').value;
    const pass2 = this.form.get('repitePassword').value;

    return pass1 === pass2 ? false : true;
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        nombre: [null, [Validators.required, Validators.maxLength(10)]],
        apPaterno: [null, [Validators.required]],
        apMaterno: [null],
        email: [
          null,
          [
            Validators.required,
            Validators.pattern(
              '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}'
            ),
          ],
        ],
        telefono: [null, [Validators.required]],
        idRol: ['', [Validators.required]],
        cargo: ['', [Validators.required]],
        idEstado: ['1'],
        password: [
          null,
          [
            Validators.required,
            Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})/),
          ],
        ],
        repitePassword: [null, [Validators.required]],
      },
      {
        validators: this.validators.passwordsIguales(
          'password',
          'repitePassword'
        ),
      }
    );

    this.servicioObtenerRoles();

    this.headerOptions.title = this.id ? 'Editar usuario' : 'Nuevo usuario';
    this.isEditar = this.id ? true : false;

    this.resultModal = this.isEditar
      ? 'Usuario actualizado con éxito'
      : 'Usuario creado con éxito';
    this.question = this.isEditar
      ? '¿Está seguro que desea guardar los cambios?'
      : '¿Está seguro que desea crear un nuevo usuario?';

    this.btnName = this.isEditar ? 'Guardar' : 'Crear';

    if (this.isEditar) {
      this.servicioObtenerUsuarioPorId(this.id);
    }
  }

  ngOnDestroy(): void {
    this.rol$.unsubscribe();
  }

  guardarUsuario() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.usuario.id = this.usuario.id == undefined ? 0 : this.usuario.id;
    this.usuario.nombre = this.form.value.nombre;
    this.usuario.apPaterno = this.form.value.apPaterno;
    this.usuario.apMaterno =
      this.form.value.apMaterno == null ? '' : this.form.value.apMaterno;
    this.usuario.email = this.form.value.email;
    this.usuario.telefono = this.form.value.telefono;
    this.usuario.idRol = this.form.value.idRol;
    this.usuario.cargo = this.form.value.cargo;
    this.usuario.idEstadoUsuario = this.form.value.idEstado;
    this.usuario.password = this.form.value.password;

    console.log(this.usuario.telefono);
    this.usuario.telefono = this.usuario.telefono.toString();
    console.log(this.usuario.telefono);

    Swal.fire({
      title: 'Alerta',
      text: this.question,
      reverseButtons: true,
      showConfirmButton: true,
      confirmButtonText: this.btnName,
      showCancelButton: true,
      cancelButtonText: 'Volver',
      padding: '1rem 0',
      width: '296',
      customClass: {
        popup: 'bs-modal',
        htmlContainer: 'bs-text',
        confirmButton: 'bs-button bs-button-primary',
        cancelButton: 'bs-button bs-button-secondary',
        title: 'bs-title',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioGuardarUsuario();
      }
    });
  }

  servicioGuardarUsuario() {
    this._usuarioService.guardarUsuario(this.usuario).subscribe({
      next: (resp: any) => {
        if (resp.success) {
          Swal.fire({
            imageUrl: '../../../assets/images/icon-ok.svg',
            text: this.resultModal,
            showConfirmButton: true,
            confirmButtonText: 'Volver',
            padding: '1rem 0',
            width: '296',
            customClass: {
              popup: 'bs-modal',
              htmlContainer: 'bs-text',
              confirmButton: 'bs-button bs-button-primary',
              cancelButton: 'bs-button bs-button-secondary',
              title: 'bs-title',
              icon: 'bs-icon-modal',
            },
          });
          this.router.navigateByUrl('/usuarios');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  servicioObtenerUsuarioPorId(id: string) {
    this._usuarioService.obtenerUsuarioPorId(id).subscribe({
      next: (resp: any) => {
        this.usuario = resp.result[0];
        this.form.setValue({
          nombre: this.usuario.nombre,
          apPaterno: this.usuario.apPaterno,
          apMaterno: this.usuario.apMaterno,
          email: this.usuario.email,
          telefono: this.usuario.telefono,
          idRol: this.usuario.idRol,
          cargo: this.usuario.cargo,
          idEstado: this.usuario.idEstadoUsuario ? '1' : '0',
          password: this.usuario.password,
          repitePassword: this.usuario.password,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  servicioObtenerRoles() {
    this.rol$ = this._utilService.obtenerRoles().subscribe({
      next: (resp: any) => {
        this.roles = resp.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
