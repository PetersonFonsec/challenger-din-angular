import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PokemonService,
  IPokemon,
} from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listPokemons$: Observable<IPokemon[]> = this.pokemon.list();
  pokemonName = '';
  currentPage = 0;
  allPages = 0;
  limit = 9;
  error = false;

  constructor(private pokemon: PokemonService) {}

  ngOnInit(): void {}

  getPokemons(): void {
    this.listPokemons$ = this.pokemon.list(this.currentPage, this.limit);
  }

  getPokemonByName(): void {
    this.listPokemons$ = this.pokemon.getByName(this.pokemonName);
    this.pokemonName = '';
  }

  prev(): void {
    this.currentPage =
      this.currentPage - this.limit <= 0 ? 0 : this.currentPage - this.limit;
    this.getPokemons();
  }

  next(): void {
    this.currentPage += this.limit;
    this.getPokemons();
  }

  goToPage(page): void {
    this.currentPage = page * this.limit;
    this.getPokemons();
  }
}
