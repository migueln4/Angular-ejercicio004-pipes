  import { Pipe, PipeTransform } from '@angular/core';
  
  @Pipe({
    name: 'cifrado'
  })
  export class CifradoPipe implements PipeTransform {
    
    transform(palabra:string,activar:boolean = true):string {
      let salida:string = "";
      if(activar) {
        for(let i=0; i<palabra.length; i++) {
          salida += "*";
        }
      } else {
        salida = palabra;
      }
      return salida;
    }
    
  }
