import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['heroe.component.css'
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  //private activatedRoute:ActivatedRoute para poder leer el url
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroePorId(id))
      )
      .subscribe(heroe => this.heroe = heroe);
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }



}




