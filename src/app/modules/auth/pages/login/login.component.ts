import { Component } from '@angular/core';

export interface User {
  name: string | undefined;
  email: string | undefined;
  avatar: string | undefined;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {}
