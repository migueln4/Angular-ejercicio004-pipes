import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule } from '@angular/core'; //LOCALE_ID es para poder tener las fechas en español

import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es'; //Necesario para poner las fechas en español
import {registerLocaleData} from '@angular/common';//Necesario para poner las fechas en español

import {CapitalizadoPipe} from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

registerLocaleData(localeEs);//Necesario para poner las fechas en español

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe //por supuesto, hay que añadir aquí el nuevo pipe que se haya creado, al igual que pasa con los componentes.
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],// Todo esto: { provide: LOCALE_ID, useValue: 'es' } es necesario para poner las fechas en español
  bootstrap: [AppComponent]
})
export class AppModule { }
