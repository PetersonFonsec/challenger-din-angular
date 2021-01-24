import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  url = `${environment.urlApi}/pokemon`;

  constructor(private http: HttpClient) {}

  list(page = 0, limit = 9) {
    return this.http.get(`${this.url}/?offset=${page}&limit=${limit}`);
  }

  get(name: string): Observable<any> {
    return this.http.get(`${this.url}/${name}`);
  }
}
