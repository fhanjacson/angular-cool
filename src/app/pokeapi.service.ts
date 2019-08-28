import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  baseURL = 'https://pokeapi.co/api/v2/';
  endPoint = '';
  constructor(private http: HttpClient) { }

  getPokemonWithID(pokeID: number) {
    this.endPoint = 'pokemon/';
    return this.http.get(this.baseURL + this.endPoint + pokeID);
  }

  getPokemonWithName(pokeName: string) {
    this.endPoint = 'pokemon/';
    return this.http.get(this.baseURL + this.endPoint + pokeName);
  }

  getPokemonRandom() {
    this.endPoint = 'pokemon/';
    return this.http.get(this.baseURL + this.endPoint + ((Math.floor(Math.random() * 808) + 1) ));
  }
}
