import { Heroe } from './../interfaces/heroes.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if (!heroe.id && !heroe.alt_img) {
      return 'assets/no-image.png';
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    } else {
      return `assets/${heroe.id}.jpg`;
    }


   
  }

 // < img mat - card - image src = "assets/{{ heroesRecibidos.id }}.jpg" > -->

}
