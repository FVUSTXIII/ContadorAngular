import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    nombre: string = "Ironman";
    edad: number = 45;

    obtenerNombre () : string {
        return  ` ${ this.nombre } - ${ this.edad } `;
    }
    cambiarEdad () : void {
        this.edad = 18;
    }
    cambiarNombre () : void {
        this.nombre = "spider-man";
    }
}