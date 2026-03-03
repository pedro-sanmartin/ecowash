import { Injectable } from '@angular/core';
import { Menu } from '../models/auth';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menu$ = new BehaviorSubject<Menu[]>([]);
  isMenuLateral$ = new Subject<boolean>();

  setMenu(menu: Menu[]) {
    this.menu$.next(menu);
  }

  getMenu() {
    return this.menu$.asObservable();
  }

  show(): void {
    this.isMenuLateral$.next(true);
  }
  hide() {
    this.isMenuLateral$.next(false);
  }

  constructor() {}
}
