import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    PokemonListComponent, 
    PokemonDetailComponent
  ]
})
export class MainModule { }
