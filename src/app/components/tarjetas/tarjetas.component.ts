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
    console.log('tarjeta elegida', this.tarjetaElegida);
    console.log('url', this.tarjetaElegida.episode);

    for(var i = 0; i < this.tarjetaElegida.episode.length; i++){
      var url = this.tarjetaElegida.episode[i].toString();
      this.aux = this.obtenerId(url);
      //console.log('bucle',this.aux);
      this.auxInt = parseInt(this.aux);
      //console.log('bucle',this.aux);
      this.idEpisodios.push(this.auxInt);
    }
  
    console.log('lista indices',this.idEpisodios);
    this.rickService.getEpisode(this.idEpisodios).subscribe(
      response => {
        this.episodios = response;
        console.log('lista episodios',  this.episodios);
      }
    )
  }

  obtenerId(url: string): string {
    var id = url.substring(40);
    //console.log('AUX',id);
    return id;
  }

}
