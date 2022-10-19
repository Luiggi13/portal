import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PlaceHolderService {

  constructor(private http: HttpClient) {}

  getAll() {
    this.http.get<Photo[]>('/api/photos');
  }
}
