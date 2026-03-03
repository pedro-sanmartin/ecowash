import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-aprobacion-ajustes',
  templateUrl: './card-aprobacion-ajustes.component.html',
  styleUrls: ['./card-aprobacion-ajustes.component.css']
})
export class CardAprobacionAjustesComponent implements OnInit {

  /* local: string = '4'; */

  constructor
  (
/*     public router: Router */
  ) { }

  ngOnInit(): void {
  }

  showModal(){
        Swal.fire({
          title: 'Revisión ajustes',
          showDenyButton: true,
          denyButtonText: `Rechazar`,
          html:
          /* '<input type="text" ng-model="test">' + */
          '<p class="bs-big-title mb-30">$15.000</p>' +
          '<p>Local</p>' +
          /* + 'ngModel="local"' + */
          '<p class="mb-10"><b>Puente Alto Falabella</b></p>' +
          '<p>Código de local</p>' +
          '<p class="mb-10"><b>001</b></p>' +
          '<p>Operador</p>' +
          '<p class="mb-10"><b>Juan Perez</b></p>' +
          '<p>Fecha</p>' +
          '<p class="mb-10"><b>10/08/2022</b></p>'+
          '<p>Responsable</p>' +
          '<p class="mb-10"><b>Jefe de ventas</b></p>' +
          '<p>Administrador</p>' +
          '<p class="mb-10"><b>Juan Pérez</b></p>',
          reverseButtons: true,
          showConfirmButton: true,
          confirmButtonText: 'Aprobar',
          /* showCancelButton: true, */
          /* cancelButtonText: 'Rechazar', */
          padding: '1rem 0',
          width: '296',
          customClass: {
            popup: 'bs-modal',
            htmlContainer: 'bs-text-left',
            confirmButton: 'bs-button bs-button-primary w-118',
            denyButton: 'bs-button bs-button-secondary w-118',
            title: 'bs-title',
          },          
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire({
              //icon: 'success',
              imageUrl: '../../../assets/images/icon-ok.svg',
              html:
              '<p class="bs-title mb-10"><b>Ajuste aplicado con éxito</b></p>' +
              '<p class="bs-text">Comparte el comprobante</p>',
              showConfirmButton: true,
              confirmButtonText: 'Volver',
              padding: '1rem 0',
              width: '296',
              customClass: {
                popup: 'bs-modal',
                htmlContainer: 'bs-text',
                confirmButton: 'bs-button bs-button-primary',
                title: 'bs-title',
                icon: 'bs-icon-modal',
              },
            })
          } else if (result.isDenied) {
            Swal.fire({
              //icon: 'success',
              imageUrl: '../../../assets/images/icon-ok.svg',
              html:
              '<p class="bs-title mb-10"><b>El descuento ha sido rechazado</b></p>' +
              '<p class="bs-text">Se le notificara al usuario que el ajuste fue rechazado. </p>',
              showConfirmButton: true,
              confirmButtonText: 'Volver',
              padding: '1rem 0',
              width: '296',
              customClass: {
                popup: 'bs-modal',
                htmlContainer: 'bs-text',
                confirmButton: 'bs-button bs-button-primary',
                title: 'bs-title',
                icon: 'bs-icon-modal',
              },
            })
          }
        })
     }

}
