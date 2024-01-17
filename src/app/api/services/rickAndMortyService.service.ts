import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarjeta } from '../models/tarjeta';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class RickYMortyService {
  private urlEndpoint: string = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Tarjeta[]> {
    const url = this.urlEndpoint+'/character';
    return this.http.get<Tarjeta[]>(url);
  }

  getEpisode(id: number[]): Observable<Episode[]> {
    const url = this.urlEndpoint+'/episode/'+id;
    return this.http.get<Episode[]>(url);
  }
}