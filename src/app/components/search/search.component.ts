import { customOperator } from './custom-operator';
import { Observable, Subject, switchMap } from 'rxjs';
import { Component, inject } from '@angular/core';
import { RickYMortyService } from 'src/app/api/services/rickAndMortyService.service';
import { Tarjeta } from 'src/app/api/models/tarjeta';
import { Episode } from 'src/app/api/models/episode';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchTerm$ = new Subject<string>();
  characters$!: Observable<Tarjeta[]>;
  episodios: Episode[] = [];
  lista: Tarjeta[] = [];
  private filterSvc = inject(RickYMortyService);
  tarjetaElegida: Tarjeta = null;
  idEpisodios: number[] = [];
  aux: string = '';
  auxInt: number = 0;

  constructor() {
    this.characters$ = this.searchTerm$.pipe(
      customOperator(
        (term: string) => term.length >= 4,
        500,
        (prev, curr) => prev === curr
      ),
      switchMap((term: string) => this.filterSvc.filterCharacter(term))
    );
  }

  search(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.searchTerm$.next(element.value);
  }

  details(tarjeta: Tarjeta): void {
    this.tarjetaElegida = tarjeta;

    for(var i = 0; i < this.tarjetaElegida.episode.length; i++){
      var url = this.tarjetaElegida.episode[i].toString();
      this.aux = this.obtenerId(url);
      this.auxInt = parseInt(this.aux);
      this.idEpisodios.push(this.auxInt);
    }
  
    this.filterSvc.getEpisode(this.idEpisodios).subscribe(
      response => {
        this.episodios = response;
      }
    )
  }

  obtenerId(url: string): string {
    var id = url.substring(40);
    return id;
  }

}
