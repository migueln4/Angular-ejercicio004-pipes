//Aparte de crear un pipe aquí, también hay que definirlo en el archivo app.module.ts
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'capitalizado'//Este es el nombre que se va a utilizar en el HTML
})
export class CapitalizadoPipe implements PipeTransform { //Es importante que el nombre del pipe en esta clase tenga el nombre puesto así por convenio.
    
    transform(value:string,todas:boolean = true):string {//El value es lo que queremos manejar para cambiar. Mientras que los argumentos no vienen exactamente en un array de argumentos. Vienen como arg1,arg2,arg3...

        //Si se quieren recibir todos los argumentos como si fueran un array de verdad, hay que poner esta definición de la función: transform(value:string,...args:any[]):string {

        value = value.toLowerCase(); //Se pasa todo a minúsculas
        let palabras = value.split(" ");//Se separan todas las palabras en elementos de un array, cortando por los espacios.
        
        if(todas) {
        for (let i in palabras) {
            //Básicamente, lo que está haciendo aquí es coger la primera letra de cada palabra, la pone en mayúscula y le concatena el resto de la cadena, que previamente se ha convertido en minúsculas.
            palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
        }
    } else {
        palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
    }
 
        return palabras.join(" "); //join lo que hace es unir todos los elementos de un array en una sola cadena separados por lo que se le ha especificado entre paréntesis.
    }
}