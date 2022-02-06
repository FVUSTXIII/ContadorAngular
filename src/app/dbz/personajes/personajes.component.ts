import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  //@Input('pc_personajes') personajes : Personaje[] = [];
  get personajes () {
    return this.dbz_service.personajes;
  }

  constructor ( private dbz_service : DbzService ) {
  }
  
}
