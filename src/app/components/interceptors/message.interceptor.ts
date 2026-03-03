import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Injectable()
export class MessageInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(request)
    .pipe(tap({
        next: () => null,
        error: (err: HttpErrorResponse) => {
            if (err.status === 400 || err.status === 409) {
                Swal.fire({
                    imageUrl: '../../../assets/images/icon-fail.svg',
                    text: err.error.message || 'Se ha producido un error',
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
            }
        }
    })
    );
  }
}