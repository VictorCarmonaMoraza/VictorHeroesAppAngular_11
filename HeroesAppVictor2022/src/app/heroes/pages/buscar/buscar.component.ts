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
  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heroesService.getHeroes()
      .subscribe(x => this.heroes = x);
  }
}
