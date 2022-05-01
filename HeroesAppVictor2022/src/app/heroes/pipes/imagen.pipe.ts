import { Heroe } from './../interfaces/heroes.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    return `assets/${ heroe.id }.jpg`;
  }

 // < img mat - card - image src = "assets/{{ heroesRecibidos.id }}.jpg" > -->

}
