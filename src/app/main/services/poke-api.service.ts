import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeApiResponse } from '../interfaces/poke-api.interface';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  baseUrl: string = "https://pokeapi.co/api/v2/"
  constructor(private http: HttpClient) { 

  }

  public async getPokemonByLimit(offset: number): Promise<Pokemon[]>{
    const url = `${this.baseUrl}pokemon/?limit=25&offset=${offset}`;
    let result: PokeApiResponse = await this.http.get<PokeApiResponse>(url).toPromise();
    let pokemonsArray: Pokemon[] = []
    for await (const pokemon of result.results){
      pokemonsArray.push(await this.getPokemonByName(pokemon.name));
    }
    return pokemonsArray;
  };

  public async getPokemonByName(name: string): Promise<Pokemon>{
    let pokemon: Pokemon | undefined = this.getFromCache(name);
    
    if(pokemon) return Promise.resolve(pokemon)

    const url = `${this.baseUrl}pokemon/${name}`;
    const toCache =  await this.http.get<Pokemon>(url).toPromise();
    /* Llamar a una función de get specie, setEvolutions(toCache)
            Llama a la especie del pokemon y coge su especie
                Con esa especie llamamos a obtener cadena de evolución
                  Con la cadena de evolución seteamos la previa a nuestro pokemon y la siguiente (solo una) || pokemon o undefined
                    En la interfaz seteamos el previous y next evolution y ya podemos pintar
                      Si tiene previo ngClass si se cumple función añade una clase o muestro el nombre

    */
    this.setCache(toCache);
    return toCache;
  };

  private getFromCache(name: string):Pokemon{
    const pokemon: Pokemon = JSON.parse(localStorage.getItem(name));
    return pokemon;
  };

  private setCache(toCache: Pokemon): void{
    localStorage.setItem(toCache.name, JSON.stringify(toCache));
  };
}
