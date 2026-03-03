import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/models/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: Menu[] = [];
  showMenu: any = this._menuService.isMenuLateral$;

  constructor(
    private _menuService: MenuService,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._menuService.getMenu().subscribe((resp) => {
      try {
        if (resp.length > 0) {
          this.items = resp;
          sessionStorage.setItem('menus', JSON.stringify(resp));
        } else if (
          sessionStorage.getItem('menus') &&
          JSON.parse(sessionStorage.getItem('menus')).length > 0
        ) {
          this.items = JSON.parse(sessionStorage.getItem('menus'));
          this._menuService.setMenu(this.items);
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

  closeMenu() {
    this._menuService.hide();
  }

  logout() {
    this._authService.Logout();
  }
}
