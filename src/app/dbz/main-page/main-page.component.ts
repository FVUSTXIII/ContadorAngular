import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  
  nuevo_p : Personaje =  {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  agregarNuevoPersonaje( e : Personaje) {
   // this.personajes.push(e)
  }

  constructor (  ) {
  }

}
