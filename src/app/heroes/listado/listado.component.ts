import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitan America',
  ];

  heroeBorrado: string = '';
  // borrado: string[] = [];

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
    // this.borrado.push(this.heroeBorrado);
    // console.log(this.borrado);
  }
}
