import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface PokemonDetails {
  species: { name: string };
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private api = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonDetails(id: number): Observable<PokemonDetails> {
    const url = `${this.api}/pokemon/${id}`;
    return this.http.get<PokemonDetails>(url);
  }
}
