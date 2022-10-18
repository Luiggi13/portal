import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  currentRoute: string;
  constructor(private router: Router) {
    this.currentRoute = this.router.url.split('/')[1];
  }
}
