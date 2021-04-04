import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  IPokemon,
  PokemonService,
} from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  subscription: Subscription;
  pokemon$: IPokemon;

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.subscription = this.router.params.subscribe(({ name }) => {
      this.pokemonService
        .getByName(name)
        .subscribe((pokemon) => (this.pokemon$ = pokemon[0]));
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
