import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['spider-man', 'ironman', 'Hulk', 'Thor'];
  heroe_borrado: string = '';
  borrarHeroe() : void {
    this.heroe_borrado = this.heroes.shift() || '';
  }

}
