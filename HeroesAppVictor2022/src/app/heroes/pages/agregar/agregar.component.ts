import { HeroesService } from './../../services/heroes.service';

import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img:''
  }

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    //Si no incluye en la url editar entonces no hacemos nada 
    if (!this.router.url.includes('editar')) {
      return;
    }
    //Leemos el id de la url
    this.activatedRoute.params
      .pipe(
      switchMap(({id})=>this.heroesService.getHeroePorId(id))
    )
      .subscribe(x=>this.heroe =x)
  }

  guardar() {
    //Si superhero es vacio no hagas nada
    if (this.heroe.superhero.trim().length === 0 ) {
      return;
    }

    //Para saber si estamos actualizando o creando uno nuevo
    //Actualizar
    if (this.heroe.id) {
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe(heroe => this.heroe=heroe)
    }

    this.heroesService.agregarHeroe(this.heroe)
      .subscribe(heroe => {
        // console.log('Respuesta', resp);
        this.router.navigate(['/heroes/editar', heroe.id])
    })
    //console.table(this.heroe);
  }

  borrarHeroe() {
    this.heroesService.borrarHeroe(this.heroe.id!)
      .subscribe(resp => {
        this.router.navigate(['/heroes']);
    })
  }

}
