import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';
import { environment } from 'src/environments/environment';
import { Header } from '../../models/header';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  isPar: boolean = true;

  headerOptions:Header = {
    title: `Menú ${this._authService.ObtenerDescriptionRole()}`,
    url:'',
    isBack: false,
    isNotificacion: this._authService.ObtenerDescriptionRole() === 'Operador' ? true : false
  }

  accesos: Menu[] = [];

  constructor(
    private _menuService: MenuService,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._menuService.getMenu().subscribe((resp) => {
      try {
        if (resp.length > 0) {
          this.accesos = resp;
          sessionStorage.setItem('menus', JSON.stringify(resp));
        } else if (
          sessionStorage.getItem('menus') &&
          JSON.parse(sessionStorage.getItem('menus')).length > 0
        ) {
          this.accesos = JSON.parse(sessionStorage.getItem('menus'));
          this._menuService.setMenu(this.accesos);
        } else {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('menus');
          this._router.navigateByUrl('/login');
        }
      } catch (error) {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('menus');
        this._router.navigateByUrl('/login');
      }
    });
  }
}
