import { Pipe, PipeTransform } from '@angular/core';
import{DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'; //Esto se importa para asegurarse de que lo que usamos sea algo seguro.

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer) {}

  transform(value:string, url:string):SafeResourceUrl {//value ese la primera parte del pipe y el segundo parámetro es lo que se recibe para poder quedar la url
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url+value); //Siempre se retorna esto cuando se trata de este tipo de pipes. Lo que devuelve del tipo es SafeResoruceUrl y por eso se ha importado, para que lo podamos especificar en la cabecea de la función.
  }

}
