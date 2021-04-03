import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatAll, map, pluck, switchMap, tap, toArray } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface IPayLoadApi {
  name: string;
  abilities: [];
  moves: [];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}
export interface IPokemon {
  name: string;
  abilities: number;
  moves: number;
  thumb: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  url = `${environment.urlApi}/pokemon`;

  constructor(private http: HttpClient) {}

  private transformPayload(payload: IPayLoadApi): IPokemon {
    return {
      name: payload.name,
      abilities: payload.abilities.length,
      moves: payload.moves.length,
      thumb: payload.sprites.other['official-artwork'].front_default,
    };
  }

  get(url: string): Observable<IPayLoadApi> {
    return this.http.get<IPayLoadApi>(url);
  }

  getByName(name: string): Observable<IPokemon[]> {
    return this.http.get(`${this.url}/${name}`).pipe(
      map((payload: IPayLoadApi) => this.transformPayload(payload)),
      toArray()
    );
  }

  list(page = 0, limit = 9): Observable<IPokemon[]> {
    return this.http.get(`${this.url}/?offset=${page}&limit=${limit}`).pipe(
      pluck('results'),
      switchMap((result: any) => result),
      pluck('url'),
      map((url: string) => this.get(url)),
      concatAll(),
      map((payload: IPayLoadApi) => this.transformPayload(payload)),
      toArray()
    );
  }
}
