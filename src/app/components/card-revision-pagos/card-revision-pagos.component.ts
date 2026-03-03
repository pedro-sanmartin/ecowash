import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-revision-pagos',
  templateUrl: './card-revision-pagos.component.html',
  styleUrls: ['./card-revision-pagos.component.css']
})
export class CardRevisionPagosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showModal(){
    Swal.fire({
      title: 'Revisión de pago',
      showDenyButton: true,
      denyButtonText: `Rechazar`,
      html:
      /* '<input type="text" ng-model="test">' + */
      '<p class="bs-big-title mb-30">$30.000</p>' +
      /* + 'ngModel="local"' + */
      '<p>Operador</p>' +
      '<p class="mb-10"><b>Juan Perez</b></p>' +
      '<p>Tipo de Abono</p>' +
      '<p class="mb-10"><b>Abono Semanal</b></p>' +
      '<p>Comprobante</p>' +
      '<div class="divImagenBoleta"><img src="../../../assets/images/boleta.png" /></div>' +
      '<button class="bs-button bs-button-primary botonDescargaDocu">Descargar documento<img class="imgFileExcel" src="../../../assets/images/download.svg" /><!-- <i-feather name="file-text"></i-feather> --></button>' +
      '<button class="bs-button bs-button-secondary botonDescargaDocu">Descargar venta diaria<img class="imgFileExcel" src="../../../assets/images/download-green.svg" /><!-- <i-feather name="file-text"></i-feather> --></button>'+
      '<p class="mt-30 mb-5">Ingresa un comentario</p>' +
      '<textarea class="bs-textarea-border" name="comentario" rows="4" cols="100" maxlength="1000" placeholder="Comentario"></textarea>' +
      '<div class="divCanCar"><p>Cantidad de carácteres</p><p>0/1000</p></div>',
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
          '<p class="bs-title mb-10"><b>Pago realizado con éxito</b></p>' +
          '<p class="bs-text">Se le notificara al usuario que fue aprobado este Pago.</p>',
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
          '<p class="bs-title mb-10"><b>El pago ha sido rechazado</b></p>' +
          '<p class="bs-text">Se le notificara al usuario que fue rechazado este pago.</p>',
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
