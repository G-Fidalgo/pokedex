import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './main/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './main/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: "",
    component: PokemonListComponent
  },
  {
    path: "detail/:pokemon",
    component: PokemonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
