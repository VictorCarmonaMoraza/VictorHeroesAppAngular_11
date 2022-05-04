import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  //Metodo para buscar heroes
  buscando() {
    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe(x => this.heroes = x);
  }

  opcionSeleccionada(event: any) {

    //TODO: validar si es un string vacio
    if (!event.option.value) {
      this.heroeSeleccionado=undefined;
      return;
    }

    // console.log(event.option.value);
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    //Llamada al servicio
    this.heroesService.getHeroePorId(heroe.id!)
      .subscribe(x => this.heroeSeleccionado = x);
  }
}
