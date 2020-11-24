import { Component, OnInit } from '@angular/core';
import { Pokemon, Ability } from '../interfaces/pokemon.interface';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  
  position: number = 0;
  pokemonList: Pokemon[] = [];

  constructor(
    private pokeApi: PokeApiService
    ) { }

  ngOnInit() {
    this.getPokemonData();
  };
  
  async getPokemonData(){
    this.pokemonList = await this.pokeApi.getPokemonByLimit(this.position);
    console.log(this.pokemonList)
  };

  selectPokemonAbilities(abilities: Ability[]): string{
    const ability: Ability = abilities.find(ability => !ability.is_hidden);
    return ability.ability.name
  };

}
