import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent implements OnInit {

  recuperarContrasena$:any;
  _email:string='';

  form: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router, private _authService:AuthService) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      email: [null, [Validators.required, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}')]]
    });
  }

  get email(){
    return this.form.get('email');
  }



  recuperarContrasena(){
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => {
        control.markAsTouched();
      })
    }

    this._email = this.form.value.email;
    
    this.iniciarRecuperacionContrasena(this._email);
  }

  iniciarRecuperacionContrasena(email:string){
    this.recuperarContrasena$ = this._authService.RecuperarContrasena(email)
      .subscribe((resp:any)=> {
        if (resp.success) {
          Swal.fire({
            //icon: 'success',
            imageUrl: '../../../assets/images/icon-ok.svg',
            text: 'Correo enviado con éxito',
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

          this.recuperarContrasena$.unsubscribe();
          this._router.navigateByUrl('/login');
        }
      });
  }

}
