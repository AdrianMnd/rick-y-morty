import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/api/models/tarjeta';
import { RickYMortyService } from 'src/app/api/services/rickAndMortyService.service';
import { Router } from '@angular/router';
import { Episode } from 'src/app/api/models/episode';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {
  lista: Tarjeta[] = [];
  episodios: Episode[] = [];
  page: number = 1;
  tarjetaElegida: Tarjeta = null;
  idEpisodios: number[] = [];
  aux: string = '';
  auxInt: number = 0;

  constructor(private route: Router, private rickService: RickYMortyService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.rickService.getCharacters().subscribe( 
      response => {
        this.lista = response['results'];
      }
    );
  }

  details(tarjeta: Tarjeta): void {
    this.tarjetaElegida = tarjeta;

    for(var i = 0; i < this.tarjetaElegida.episode.length; i++){
      var url = this.tarjetaElegida.episode[i].toString();
      this.aux = this.obtenerId(url);
      this.auxInt = parseInt(this.aux);
      this.idEpisodios.push(this.auxInt);
    }
  
    this.rickService.getEpisode(this.idEpisodios).subscribe(
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
