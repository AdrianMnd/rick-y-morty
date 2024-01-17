import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { ResponseInfoResults, Tarjeta } from '../models/tarjeta';
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

  filterCharacter(name: string): Observable<Tarjeta[]>{
    const API = `https://rickandmortyapi.com/api/character/?name=${name}`;
    return this.http.get<ResponseInfoResults>(API).pipe(
      map((res: ResponseInfoResults) => res?.results),
      catchError(() => EMPTY)
    );
  }
  
}