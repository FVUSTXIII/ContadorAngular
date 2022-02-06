import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
    @Input('personaje_a_agregar') nuevo_p : Personaje = {
        nombre : "",
        poder: 0
    }
    constructor ( private dbz_service : DbzService ) {}
    // @Output() onNuevoPersonaje : EventEmitter<Personaje>  = new EventEmitter();
    agregar( ): void {
      if ( this.nuevo_p.nombre.trim().length  === 0) { // Si el personaje esta vacío sal del método.
        return;
      }
      this.dbz_service.agregarPersonaje( this.nuevo_p );
      // this.onNuevoPersonaje.emit(this.nuevo_p);
      this.nuevo_p = {
        nombre: "",
        poder: 0
      }      
    }

}
