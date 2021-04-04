import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPokemon } from '../pokemon/pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonStorageService {
  private key = environment.STORAGE_KEY;

  constructor() {}

  set(pokemon: IPokemon): void {
    localStorage.setItem(this.key, JSON.stringify(pokemon));
  }

  get(): IPokemon | null {
    const pokemon = localStorage.getItem(this.key);
    return pokemon ? JSON.parse(pokemon) : null;
  }
}
