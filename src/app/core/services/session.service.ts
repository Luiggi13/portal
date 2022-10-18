import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() {}

  isLogged(): boolean {
    if (environment.token) { 
      return true;
    }
    return false;
  }
}
