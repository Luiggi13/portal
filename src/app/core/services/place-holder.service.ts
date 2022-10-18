import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceHolderService {

  constructor(private http: HttpClient) {}

  getAll() {
    this.http.get<any>('/api/photos')
      .subscribe(d=>console.log(d))
  }
}
