import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface UserChristmas {
  id?: string;
  email?: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlApi = 'https://626ed50dc94c985b1e3a6549.mockapi.io/api/v1/christmas'
  constructor(private http: HttpClient) { }

  public get header() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getUsers(): Observable<UserChristmas[]> {
    return this.http.get<UserChristmas[]>(this.urlApi).pipe(
      map((response: UserChristmas[]) => {
        const result = response;
        if (result) {
          return result;
        }
        return [];
      })
    );
  }

  setUser(data: UserChristmas): Observable<UserChristmas[]> {
    return this.http.post<UserChristmas[]>(this.urlApi, data, { headers: this.header }).pipe(
      map((result) => {
        if (result) {
          return result;
        }
        return [];
      })
    );
  }
}
