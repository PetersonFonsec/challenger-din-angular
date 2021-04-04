import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonStorageService } from 'src/app/services/pokemon-storage/pokemon-storage.service';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls: ['./modal-skills.component.scss'],
})
export class ModalSkillsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  skills = [];
  name = '';

  constructor(private pokemon: PokemonStorageService) {}

  ngOnInit(): void {
    const pokemon = this.pokemon.get();

    if (pokemon) {
      this.name = pokemon.name;
      this.skills = pokemon.abilities.map((ability) => ability.ability.name);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
