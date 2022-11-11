import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface ItemMenu {
  text: string;
  icon: string;
  to: string;
}

interface SubMenu {
  text: string;
  fn: string;
}

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  isLogged = true;
  classLogged = 'shadow-red-400';
  classSubmenu = 'hidden';
  currentRoute: string;
  isSubmenuVisible = false;
  isSidebarVisible = true;
  submenu: SubMenu[] = [
    {
      text: 'Logout',
      fn: 'setLogin'
    }
  ]
  menu: ItemMenu[] = [
    {
      text: 'Booking a table',
      icon: 'columns',
      to: '/dash'
    },
    {
      text: 'Booking a meeting room',
      icon: 'github',
      to: '/auth'
    },
    {
      text: 'Dashboard',
      icon: 'columns',
      to: '/auth'
    }
  ];
  constructor(private router: Router) {
    this.isLogged ? this.classLogged = 'shadow-lime-400': this.classLogged = 'shadow-red-400';
    this.isSubmenuVisible ? this.classSubmenu = 'visible': this.classSubmenu = 'hidden';
    this.currentRoute = this.router.url.split('/')[1];
  }

  setLogin() {
    this.isLogged = !this.isLogged;
    this.isLogged ? this.classLogged = 'shadow-lime-400': this.classLogged = 'shadow-red-400';
  }

  visibilitySubMenu() {
    this.isSubmenuVisible = !this.isSubmenuVisible;
    this.isSubmenuVisible ? this.classSubmenu = 'visible': this.classSubmenu = 'hidden';
  }

  myFn(fn: string) {
    switch (fn) {
      case 'setLogin':
        this.setLogin();
        this.visibilitySubMenu();
        break;
      case 'statusSidebar':
        this.statusSidebar();
        this.visibilitySubMenu();
        break;

      default:
        break;
    }
  }

  statusSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
