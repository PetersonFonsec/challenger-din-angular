import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  pokemonName: string;
  listPokemons: any[] = [];
  currentPage: 0;
  error: boolean;

  constructor(private pokemon: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  submit(): void {
    if (this.pokemonName) {
      this.pokemon.get(this.pokemonName).subscribe(
        (reponse) => {
          this.listPokemons = [];
          this.listPokemons.push(this.formatedResponse(reponse));
          this.error = false;
        },
        (erro) => {
          this.error = true;
        }
      );
    } else {
      this.getPokemons();
    }
  }

  getPokemons(): void {
    this.pokemon
      .list(this.currentPage)
      .subscribe(({ results: pokemons }: any) => {
        pokemons.forEach((pokemon) => {
          this.listPokemons = [];
          this.error = false;
          this.pokemon.get(pokemon.name).subscribe((reponse) => {
            this.listPokemons.push(this.formatedResponse(reponse));
          });
        });
      });
  }

  formatedResponse(reponse) {
    return {
      name: reponse.name,
      abilities: reponse.abilities.length,
      moves: reponse.moves.length,
      thumb: reponse.sprites.other['official-artwork'].front_default,
    };
  }
}
