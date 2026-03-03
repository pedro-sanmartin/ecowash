import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from 'src/app/models/auth';
import { MenuService } from 'src/app/services/menu.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  validate: Login = {} as Login;
  showPass: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(
            '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}'
          ),
        ],
      ],
      password: [null, [Validators.required]]
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  validarLogin(login: Login) {
    this._authService.Login(login).subscribe((resp: any) => {
      if (resp.success) {
        sessionStorage.setItem('token', resp.result.token);
        sessionStorage.setItem('menus', JSON.stringify(resp.menus));
        this._menuService.setMenu(resp.menus);
        this._router.navigateByUrl('/inicio');
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'error',
          customClass: {
            popup: 'bs-modal',
          },
          title: `${resp.message}`,
        });
      }
    });
  }

  login() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.validate.email = this.form.value.email;
    this.validate.password = this.form.value.password;

    this.validarLogin(this.validate);
  }

  showPassword(){
    this.showPass = !this.showPass;
  }
}
