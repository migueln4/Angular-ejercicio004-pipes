import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Miguel";
  numerosArray:number[] = [1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  numeroCualquiera:number = 1.007;
  a:number = 0.234;
  salario:number = 1234.5;

  luchador = {
    nombre: "Hunter Hearst Helmsley",
    nombreClave: "Triple H",
    peso: 116,
    equipo:{
      nombre: "Evolution",
      lider: "Ric Flair",
      aliado: "Randy Orton"
    }
  }

  fecha = new Date(); //Esto devuelve el instante actual.
  
  nombreMin = "miGuel neGRilLo garcía Muñoz";

  video:string = "s2NPK5QKiec";

  activar:boolean = true;

  palabraSecreta:string = "METAL \\m/";

}
