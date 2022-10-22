import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { AcumuladorModule } from './acumulador/acumulador.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, AcumuladorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
